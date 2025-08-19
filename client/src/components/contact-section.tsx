import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Mail, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      projectType: "",
      message: "",
      isNonProfit: false,
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you within 24 hours.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-primary-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="contact-title">
            Start Your Project
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto" data-testid="contact-subtitle">
            Ready to turn your complex ideas into clear, actionable language? Let's discuss how I can help you communicate with credibility and life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Me</h3>
                  <p className="text-blue-100 mb-2">Get in touch for project inquiries</p>
                  <a 
                    href="mailto:hello@yourname.com" 
                    className="text-accent hover:text-accent/80 font-semibold"
                    data-testid="contact-email-link"
                  >
                    hello@yourname.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                  <Calendar className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Schedule a Call</h3>
                  <p className="text-blue-100 mb-2">Book a free consultation to discuss your needs</p>
                  <a 
                    href="#" 
                    className="text-accent hover:text-accent/80 font-semibold"
                    data-testid="schedule-call-link"
                  >
                    Schedule 30-min call
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                  <Clock className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Response Time</h3>
                  <p className="text-blue-100">I typically respond to inquiries within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John"
                            className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:ring-accent"
                            data-testid="input-firstName"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Doe"
                            className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:ring-accent"
                            data-testid="input-lastName"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="john@example.com"
                          className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:ring-accent"
                          data-testid="input-email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Company (Optional)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Company"
                          className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:ring-accent"
                          data-testid="input-company"
                          value={field.value || ""}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          name={field.name}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Project Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger 
                            className="bg-white/20 border-white/30 text-white focus:ring-accent"
                            data-testid="select-projectType"
                          >
                            <SelectValue placeholder="Choose your service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="analytical-articles">Analytical Articles</SelectItem>
                          <SelectItem value="informational-articles">Informational Articles</SelectItem>
                          <SelectItem value="website-copy">Website Copy</SelectItem>
                          <SelectItem value="marketing-copy">Marketing Copy</SelectItem>
                          <SelectItem value="medical-communication">Medical & Health Communication</SelectItem>
                          <SelectItem value="editorial-consulting">Editorial Consulting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isNonProfit"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mt-1 border-white/30 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                          data-testid="checkbox-isNonProfit"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-white font-normal">
                          Non-profit organization (eligible for significant discounts)
                        </FormLabel>
                        <p className="text-sm text-blue-100">
                          Check this box if you represent a registered non-profit organization
                        </p>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Project Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project, timeline, goals, and target audience..."
                          className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:ring-accent min-h-[100px]"
                          data-testid="textarea-message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-accent text-white py-4 hover:bg-accent/90 font-semibold"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {contactMutation.isPending ? "Sending..." : "Start Your Project"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
