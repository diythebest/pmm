# Overview

This is a full-stack web application built with React, Express, and TypeScript that appears to be a personal portfolio/marketing website. The application showcases a product marketing professional's experience, skills, and achievements. It uses a modern tech stack with shadcn/ui components for the frontend and is configured to use PostgreSQL with Drizzle ORM for data persistence.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Problem**: Need a modern, responsive UI with reusable components and type safety.

**Solution**: React with TypeScript using Vite as the build tool and bundler.

**Key Decisions**:
- **UI Framework**: shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with CSS variables for theming, using the "new-york" style variant with neutral base colors
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query (v5) for server state management with custom query client configuration
- **Form Handling**: React Hook Form with Zod resolvers for type-safe form validation

**Rationale**: This stack provides excellent developer experience with type safety, reusable components, and minimal bundle size. The shadcn/ui approach allows for component customization while maintaining consistency.

## Backend Architecture

**Problem**: Need a simple, performant API server that can serve both API routes and the built frontend.

**Solution**: Express.js server with TypeScript, using ESM modules.

**Key Decisions**:
- **Runtime**: Node.js with native ESM support
- **Framework**: Express.js for HTTP server and routing
- **Development Server**: Vite middleware integration for hot module replacement during development
- **Build Process**: esbuild for production backend bundling, Vite for frontend bundling
- **Logging**: Custom middleware for request/response logging with timing information

**Rationale**: Express provides a minimal, flexible foundation. The Vite integration enables a seamless development experience with HMR. Using esbuild for production builds ensures fast build times.

**Storage Layer**: Currently implements an in-memory storage interface (`MemStorage`) with CRUD operations for users. This is designed to be swapped with a database-backed implementation using Drizzle ORM.

## Data Storage

**Problem**: Need persistent storage for user data with type safety and migrations support.

**Solution**: PostgreSQL with Drizzle ORM.

**Key Decisions**:
- **Database**: PostgreSQL (via Neon serverless driver for potential serverless deployment)
- **ORM**: Drizzle ORM v0.39+ with schema defined in TypeScript
- **Schema Validation**: Drizzle-Zod for automatic Zod schema generation from database schemas
- **Migrations**: Drizzle Kit for schema migrations stored in `/migrations` directory
- **Connection**: Uses `DATABASE_URL` environment variable for database connection

**Current Schema**:
- `users` table with UUID primary key, username (unique), and password fields
- Type-safe insert and select schemas generated via Drizzle

**Rationale**: Drizzle provides excellent TypeScript support with minimal runtime overhead. The schema-first approach keeps types in sync with the database. PostgreSQL offers reliability and feature richness for future growth.

**Note**: The application structure includes a storage abstraction layer (`IStorage` interface) that currently uses in-memory storage but is designed to be replaced with a Drizzle-based implementation.

## Build and Development

**Development Mode**:
- Frontend served via Vite dev server with HMR
- Backend runs with tsx for TypeScript execution
- Custom error overlay and dev banners for Replit environment

**Production Build**:
- Frontend: Vite builds to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Static file serving from built frontend directory

**Path Aliases**:
- `@/*` maps to `client/src/*`
- `@shared/*` maps to `shared/*` (for code shared between frontend and backend)
- `@assets/*` maps to `attached_assets/*`

# External Dependencies

## UI Component Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible component primitives (@radix-ui/react-*)
- **shadcn/ui**: Pre-styled components built on Radix UI with Tailwind CSS
- **Lucide React**: Icon library for UI elements
- **class-variance-authority**: Utility for managing component variants
- **clsx & tailwind-merge**: Class name utilities for conditional styling

## Data & State Management
- **TanStack React Query v5**: Server state management with caching and synchronization
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation library
- **Drizzle ORM**: TypeScript ORM for PostgreSQL
- **Drizzle Zod**: Generate Zod schemas from Drizzle schemas

## Backend & Database
- **Express.js**: Web server framework
- **@neondatabase/serverless**: PostgreSQL driver for serverless/edge environments
- **Drizzle Kit**: Database migration tool
- **connect-pg-simple**: PostgreSQL session store for Express (installed but not yet configured)

## Development Tools
- **Vite**: Frontend build tool and dev server
- **esbuild**: Fast JavaScript/TypeScript bundler for backend
- **tsx**: TypeScript execution engine for development
- **TypeScript**: Type system and compiler
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS & Autoprefixer**: CSS processing

## Replit-Specific Integrations
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for development
- **@replit/vite-plugin-cartographer**: Development tooling integration
- **@replit/vite-plugin-dev-banner**: Development environment banner

## Additional Utilities
- **date-fns**: Date manipulation library
- **nanoid**: Unique ID generation
- **wouter**: Lightweight routing for React
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel component
- **vaul**: Drawer/bottom sheet component
- **react-day-picker**: Date picker component
- **input-otp**: OTP input component
- **recharts**: Charting library (installed but not actively used in current codebase)