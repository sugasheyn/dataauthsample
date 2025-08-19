# Overview

This is a freelance writing services website built as a full-stack web application. The project showcases a professional writer's portfolio, services, and provides a contact form for potential clients. It's designed to be a modern, responsive, and professional web presence for a content creator offering analytical articles, website copy, marketing materials, and other writing services.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for the main UI framework
- **Vite** as the build tool and development server for fast development experience
- **React Router (Wouter)** for client-side routing with a minimal footprint
- **TanStack Query** for server state management and API calls
- **React Hook Form** with Zod validation for form handling and validation
- **shadcn/ui** component library built on Radix UI primitives for consistent, accessible UI components
- **Tailwind CSS** for utility-first styling with custom design tokens and responsive design

## Backend Architecture
- **Express.js** server with TypeScript for the REST API
- **Modular route system** with separation of concerns between routing and business logic
- **In-memory storage** implementation with interface-based design allowing for easy database migration
- **Zod schema validation** for request/response validation shared between frontend and backend
- **Custom middleware** for request logging and error handling

## Data Storage Solutions
- **Drizzle ORM** configured for PostgreSQL with schema definitions in TypeScript
- **Neon Database** as the PostgreSQL provider (configured but not yet implemented)
- **Memory storage fallback** for development and testing without database dependency
- **Schema-first approach** with shared types between frontend and backend

## Design System
- **Custom color palette** with CSS custom properties for theming
- **Responsive design** with mobile-first approach
- **Inter font family** for modern typography
- **Component-based architecture** with reusable UI components
- **Accessibility-focused** components using Radix UI primitives

## Development Workflow
- **Hot module replacement** in development with Vite
- **TypeScript** for type safety across the entire stack
- **ESM modules** throughout the project for modern JavaScript standards
- **Path aliases** for clean imports and better developer experience

# External Dependencies

## Database & ORM
- **Drizzle ORM** - Type-safe SQL query builder and schema management
- **@neondatabase/serverless** - PostgreSQL database hosting and connection
- **Drizzle Kit** - Database migration and schema management tools

## UI Framework & Components
- **React** - Core frontend framework
- **Radix UI** - Unstyled, accessible component primitives
- **shadcn/ui** - Pre-built component library based on Radix UI
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Form Handling & Validation
- **React Hook Form** - Form state management and validation
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Integration between React Hook Form and Zod

## State Management & API
- **TanStack Query** - Server state management and caching
- **Wouter** - Minimal client-side routing

## Development Tools
- **Vite** - Build tool and development server
- **TypeScript** - Type safety and developer experience
- **ESBuild** - Fast JavaScript bundler for production builds
- **PostCSS** - CSS processing with Autoprefixer

## Utility Libraries
- **clsx** & **tailwind-merge** - Conditional className utilities
- **date-fns** - Date manipulation and formatting
- **nanoid** - Unique ID generation