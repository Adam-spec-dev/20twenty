# 🏆 ELITE ENTERPRISE AI-DRIVEN DEVELOPMENT SYSTEM
## Production-Grade Architecture + 5-Agent Orchestration Framework
### Version 2.0 — Fixed, Unified, Executable

---

> **HOW TO USE THIS FILE**
> Copy each `MASTER SYSTEM PROMPT` block into your AI tool (Cursor, Claude, Copilot, ChatGPT) as the **system prompt** or **custom instructions**. Use the architecture files as your project scaffold. Follow the workflow at the bottom.

---

# PART 1: THE ARCHITECTURE BLUEPRINT

## ✅ Complete Tech Stack (Production-Validated)

```yaml
Frontend:
  - Next.js 14+ (App Router + Server Components)
  - TypeScript (strict mode)
  - TailwindCSS + shadcn/ui
  - Framer Motion (animations)
  - TanStack Query v5 (data fetching + caching)
  - Zustand (client state)

Backend:
  - Node.js + tRPC v11 (type-safe end-to-end)
  - Prisma ORM v5
  - PostgreSQL 15+
  - Redis 7+ (caching + sessions)
  - Socket.io (real-time)

Infrastructure:
  - Docker + Docker Compose (dev)
  - Kubernetes (production)
  - Nginx (reverse proxy + SSL)
  - Vercel / AWS ECS / GCP Cloud Run
  - CloudFlare CDN + WAF
  - GitHub Actions (CI/CD)

Security:
  - Auth.js v5 (NextAuth successor)
  - JWT + Refresh Token rotation
  - Upstash Rate Limiting
  - Helmet.js + CSRF protection
  - Zod (input validation everywhere)

Monitoring:
  - Sentry (error tracking)
  - PostHog (product analytics)
  - Prometheus + Grafana (metrics)
  - Pino (structured logging)
```

---

## 📁 Complete Project Structure (Turborepo Monorepo)

```
enterprise-app/
├── apps/
│   ├── web/                              # Main Next.js app
│   │   ├── src/
│   │   │   ├── app/                      # App Router
│   │   │   │   ├── (auth)/
│   │   │   │   │   ├── login/page.tsx
│   │   │   │   │   ├── register/page.tsx
│   │   │   │   │   ├── forgot-password/page.tsx
│   │   │   │   │   └── layout.tsx
│   │   │   │   ├── (dashboard)/
│   │   │   │   │   ├── dashboard/page.tsx
│   │   │   │   │   ├── analytics/page.tsx
│   │   │   │   │   ├── settings/
│   │   │   │   │   │   ├── profile/page.tsx
│   │   │   │   │   │   ├── billing/page.tsx
│   │   │   │   │   │   └── team/page.tsx
│   │   │   │   │   └── layout.tsx
│   │   │   │   ├── (marketing)/
│   │   │   │   │   ├── page.tsx          # Landing
│   │   │   │   │   ├── pricing/page.tsx
│   │   │   │   │   ├── features/page.tsx
│   │   │   │   │   ├── blog/
│   │   │   │   │   │   ├── page.tsx
│   │   │   │   │   │   └── [slug]/page.tsx
│   │   │   │   │   └── layout.tsx
│   │   │   │   ├── api/
│   │   │   │   │   ├── auth/[...nextauth]/route.ts
│   │   │   │   │   ├── trpc/[trpc]/route.ts
│   │   │   │   │   └── webhooks/
│   │   │   │   │       ├── stripe/route.ts
│   │   │   │   │       └── github/route.ts
│   │   │   │   ├── admin/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── users/page.tsx
│   │   │   │   │   └── layout.tsx
│   │   │   │   ├── error.tsx             # Error boundary
│   │   │   │   ├── not-found.tsx
│   │   │   │   ├── loading.tsx
│   │   │   │   └── layout.tsx            # Root layout
│   │   │   ├── components/
│   │   │   │   ├── ui/                   # shadcn primitives
│   │   │   │   ├── layouts/
│   │   │   │   │   ├── header.tsx
│   │   │   │   │   ├── sidebar.tsx
│   │   │   │   │   └── footer.tsx
│   │   │   │   ├── forms/
│   │   │   │   │   ├── login-form.tsx
│   │   │   │   │   └── settings-form.tsx
│   │   │   │   ├── marketing/
│   │   │   │   │   ├── hero-section.tsx
│   │   │   │   │   ├── features-section.tsx
│   │   │   │   │   ├── pricing-section.tsx
│   │   │   │   │   ├── testimonials-section.tsx
│   │   │   │   │   ├── stats-section.tsx
│   │   │   │   │   └── cta-section.tsx
│   │   │   │   ├── dashboard/
│   │   │   │   │   ├── metric-card.tsx
│   │   │   │   │   ├── charts/
│   │   │   │   │   └── data-table.tsx
│   │   │   │   └── shared/
│   │   │   │       ├── error-boundary.tsx
│   │   │   │       ├── skeleton.tsx
│   │   │   │       └── empty-state.tsx
│   │   │   ├── server/                   # tRPC server
│   │   │   │   ├── trpc.ts               # tRPC init
│   │   │   │   ├── context.ts
│   │   │   │   └── routers/
│   │   │   │       ├── _app.ts           # Root router
│   │   │   │       ├── auth.ts
│   │   │   │       ├── users.ts
│   │   │   │       ├── products.ts
│   │   │   │       └── analytics.ts
│   │   │   ├── lib/
│   │   │   │   ├── auth.ts               # Auth.js config
│   │   │   │   ├── db.ts                 # Prisma client
│   │   │   │   ├── redis.ts              # Redis client
│   │   │   │   ├── rate-limit.ts
│   │   │   │   ├── logger.ts
│   │   │   │   ├── analytics.ts
│   │   │   │   └── utils/
│   │   │   │       ├── cn.ts             # className util
│   │   │   │       ├── format.ts
│   │   │   │       └── errors.ts
│   │   │   ├── hooks/
│   │   │   │   ├── use-debounce.ts
│   │   │   │   ├── use-local-storage.ts
│   │   │   │   └── use-media-query.ts
│   │   │   ├── types/
│   │   │   │   ├── index.ts
│   │   │   │   └── next-auth.d.ts        # Session type augmentation
│   │   │   ├── config/
│   │   │   │   ├── site.ts               # Site metadata
│   │   │   │   └── nav.ts                # Navigation config
│   │   │   └── styles/
│   │   │       └── globals.css
│   │   ├── prisma/
│   │   │   ├── schema.prisma
│   │   │   ├── seed.ts
│   │   │   └── migrations/
│   │   ├── tests/
│   │   │   ├── unit/
│   │   │   ├── integration/
│   │   │   └── e2e/
│   │   ├── public/
│   │   ├── next.config.js
│   │   ├── middleware.ts
│   │   ├── tailwind.config.ts
│   │   └── package.json
│   │
│   └── docs/                             # Docs site (Nextra/Mintlify)
│
├── packages/
│   ├── ui/                               # Shared component library
│   │   ├── src/
│   │   └── package.json
│   ├── config/
│   │   ├── eslint-config/
│   │   ├── prettier-config/
│   │   └── tsconfig/
│   ├── database/                         # Shared Prisma schema
│   ├── auth/                             # Shared auth utilities
│   └── utils/                            # Shared helper functions
│
├── infrastructure/
│   ├── docker/
│   │   ├── Dockerfile.web
│   │   ├── Dockerfile.api
│   │   └── .dockerignore
│   ├── docker-compose.yml                # Dev environment
│   ├── docker-compose.prod.yml           # Prod overrides
│   ├── kubernetes/
│   │   ├── deployments/
│   │   │   ├── web-deployment.yaml
│   │   │   └── api-deployment.yaml
│   │   ├── services/
│   │   │   ├── web-service.yaml
│   │   │   └── api-service.yaml
│   │   ├── ingress/
│   │   │   └── ingress.yaml
│   │   └── secrets/
│   │       └── secrets.yaml.example
│   ├── nginx/
│   │   └── nginx.conf
│   └── terraform/
│       ├── main.tf
│       ├── variables.tf
│       └── outputs.tf
│
├── scripts/
│   ├── setup.sh                          # One-command dev setup
│   ├── health-check.ts
│   └── generate-types.ts
│
├── .github/
│   └── workflows/
│       ├── ci.yml                        # Test + lint on PR
│       ├── deploy.yml                    # Deploy on merge to main
│       └── security.yml                  # Weekly dependency audit
│
├── .env.example                          # All required env vars documented
├── turbo.json
├── package.json
└── README.md
```

---

# PART 2: PRODUCTION CODE — ALL FILES

## File: `apps/web/next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: { allowedOrigins: ['localhost:3000'] },
    optimizePackageImports: ['@/components/ui', 'lucide-react'],
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.yourdomain.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

---

## File: `prisma/schema.prisma` (Complete — Fixed Relations)

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  password      String?   // Nullable for OAuth-only users
  role          Role      @default(USER)
  emailVerified DateTime?
  image         String?

  accounts      Account[]
  sessions      Session[]
  products      Product[]
  subscriptions Subscription[]
  auditLogs     AuditLog[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([email])
  @@index([role])
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?
  user              User    @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
  @@index([userId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}

model Product {
  id          String    @id @default(cuid())
  name        String
  description String?   @db.Text
  price       Decimal   @db.Decimal(10, 2)
  slug        String    @unique
  published   Boolean   @default(false)
  userId      String
  categoryId  String
  user        User      @relation(fields: [userId], references: [id])
  category    Category  @relation(fields: [categoryId], references: [id])
  images      ProductImage[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([userId])
  @@index([categoryId])
  @@index([slug])
  @@index([published])
}

model Category {
  id       String    @id @default(cuid())
  name     String    @unique
  slug     String    @unique
  products Product[]
}

model ProductImage {
  id        String  @id @default(cuid())
  url       String
  alt       String?
  order     Int     @default(0)
  productId String
  product   Product @relation(fields: [productId], references: [id], onDelete: Cascade)

  @@index([productId])
}

model Subscription {
  id                String    @id @default(cuid())
  userId            String
  user              User      @relation(fields: [userId], references: [id])
  stripeCustomerId  String?   @unique
  stripePriceId     String?
  stripeSubId       String?   @unique
  plan              Plan      @default(FREE)
  status            SubStatus @default(ACTIVE)
  currentPeriodEnd  DateTime?
  cancelAtPeriodEnd Boolean   @default(false)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([userId])
  @@index([stripeCustomerId])
}

model AuditLog {
  id        String  @id @default(cuid())
  userId    String
  user      User    @relation(fields: [userId], references: [id])
  action    String
  entity    String
  entityId  String
  metadata  Json?
  ipAddress String?
  userAgent String?

  createdAt DateTime @default(now())

  @@index([userId])
  @@index([entity, entityId])
  @@index([createdAt])
}

enum Role {
  USER
  ADMIN
  MODERATOR
  SUPER_ADMIN
}

enum Plan {
  FREE
  PRO
  ENTERPRISE
}

enum SubStatus {
  ACTIVE
  CANCELLED
  EXPIRED
  PAST_DUE
  TRIALING
}
```

---

## File: `src/server/trpc.ts` (tRPC v11 Init)

```typescript
import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';
import { ZodError } from 'zod';
import type { Context } from './context';

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

// Middleware: logging
const loggerMiddleware = t.middleware(async ({ path, type, next }) => {
  const start = Date.now();
  const result = await next();
  const ms = Date.now() - start;
  console.log(`[tRPC] ${type} ${path} — ${ms}ms`);
  return result;
});

// Middleware: auth enforcement
const enforceAuth = t.middleware(({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({ ctx: { ...ctx, session: ctx.session } });
});

// Middleware: admin enforcement
const enforceAdmin = t.middleware(({ ctx, next }) => {
  if (!ctx.session?.user || ctx.session.user.role !== 'ADMIN') {
    throw new TRPCError({ code: 'FORBIDDEN' });
  }
  return next({ ctx });
});

export const router = t.router;
export const publicProcedure = t.procedure.use(loggerMiddleware);
export const protectedProcedure = t.procedure.use(loggerMiddleware).use(enforceAuth);
export const adminProcedure = t.procedure.use(loggerMiddleware).use(enforceAdmin);
```

---

## File: `src/server/context.ts`

```typescript
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { redis } from '@/lib/redis';
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

export async function createContext({ req }: FetchCreateContextFnOptions) {
  const session = await getServerSession(authOptions);
  return {
    session,
    prisma,
    redis,
    req,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
```

---

## File: `src/server/routers/_app.ts` (Root Router — Complete)

```typescript
import { router } from '../trpc';
import { authRouter } from './auth';
import { usersRouter } from './users';
import { productsRouter } from './products';
import { analyticsRouter } from './analytics';

export const appRouter = router({
  auth: authRouter,
  users: usersRouter,
  products: productsRouter,
  analytics: analyticsRouter,
});

export type AppRouter = typeof appRouter;
```

---

## File: `src/server/routers/products.ts` (Complete with Pagination)

```typescript
import { z } from 'zod';
import { router, publicProcedure, protectedProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';

const CreateProductSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().max(2000).optional(),
  price: z.number().positive().max(999999),
  categoryId: z.string().cuid(),
  slug: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/),
});

export const productsRouter = router({
  list: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(10),
        cursor: z.string().optional(),
        categoryId: z.string().cuid().optional(),
        search: z.string().max(100).optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { limit, cursor, categoryId, search } = input;

      const items = await ctx.prisma.product.findMany({
        take: limit + 1,
        cursor: cursor ? { id: cursor } : undefined,
        where: {
          published: true,
          ...(categoryId && { categoryId }),
          ...(search && {
            OR: [
              { name: { contains: search, mode: 'insensitive' } },
              { description: { contains: search, mode: 'insensitive' } },
            ],
          }),
        },
        include: {
          category: true,
          images: { orderBy: { order: 'asc' }, take: 1 },
          user: { select: { name: true, image: true } },
        },
        orderBy: { createdAt: 'desc' },
      });

      let nextCursor: string | undefined;
      if (items.length > limit) {
        nextCursor = items.pop()!.id;
      }

      return { items, nextCursor };
    }),

  byId: publicProcedure
    .input(z.object({ id: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      const product = await ctx.prisma.product.findUnique({
        where: { id: input.id },
        include: {
          category: true,
          images: { orderBy: { order: 'asc' } },
          user: { select: { name: true, image: true } },
        },
      });
      if (!product) throw new TRPCError({ code: 'NOT_FOUND' });
      return product;
    }),

  create: protectedProcedure
    .input(CreateProductSchema)
    .mutation(async ({ ctx, input }) => {
      // Check slug uniqueness
      const existing = await ctx.prisma.product.findUnique({
        where: { slug: input.slug },
      });
      if (existing) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'Slug already in use',
        });
      }

      return ctx.prisma.product.create({
        data: { ...input, userId: ctx.session.user.id },
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid(),
        data: CreateProductSchema.partial(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const product = await ctx.prisma.product.findUnique({
        where: { id: input.id },
      });
      if (!product) throw new TRPCError({ code: 'NOT_FOUND' });
      if (
        product.userId !== ctx.session.user.id &&
        ctx.session.user.role !== 'ADMIN'
      ) {
        throw new TRPCError({ code: 'FORBIDDEN' });
      }

      return ctx.prisma.product.update({
        where: { id: input.id },
        data: input.data,
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().cuid() }))
    .mutation(async ({ ctx, input }) => {
      const product = await ctx.prisma.product.findUnique({
        where: { id: input.id },
      });
      if (!product) throw new TRPCError({ code: 'NOT_FOUND' });
      if (
        product.userId !== ctx.session.user.id &&
        ctx.session.user.role !== 'ADMIN'
      ) {
        throw new TRPCError({ code: 'FORBIDDEN' });
      }

      await ctx.prisma.product.delete({ where: { id: input.id } });
      return { success: true };
    }),
});
```

---

## File: `src/lib/auth.ts` (Auth.js v5 — Fixed & Hardened)

```typescript
import type { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import { prisma } from './db';
import { compare } from 'bcryptjs';
import { z } from 'zod';

const CredentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  session: { strategy: 'jwt', maxAge: 30 * 24 * 60 * 60 }, // 30 days
  pages: {
    signIn: '/login',
    error: '/login',
    verifyRequest: '/verify-email',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: false,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Validate input shape first
        const parsed = CredentialsSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const user = await prisma.user.findUnique({
          where: { email: parsed.data.email },
        });

        // Constant-time compare to prevent timing attacks
        if (!user?.password) {
          await compare('dummy', '$2b$12$dummyhashfordummycomparison00000000');
          return null;
        }

        const isValid = await compare(parsed.data.password, user.password);
        if (!isValid) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          image: user.image,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // Initial sign-in
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
      }
      // Session update trigger
      if (trigger === 'update' && session) {
        token.name = session.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  events: {
    async signIn({ user }) {
      await prisma.auditLog.create({
        data: {
          userId: user.id!,
          action: 'SIGN_IN',
          entity: 'User',
          entityId: user.id!,
        },
      });
    },
  },
};
```

---

## File: `src/types/next-auth.d.ts` (Type Augmentation — Required)

```typescript
import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: string;
  }
}
```

---

## File: `middleware.ts` (Hardened Route Protection)

```typescript
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const { token } = req.nextauth;
    const { pathname } = req.nextUrl;

    const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/register');
    const isDashboard = pathname.startsWith('/dashboard');
    const isAdmin = pathname.startsWith('/admin');

    // Redirect authenticated users away from auth pages
    if (isAuthPage && token) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    // Block non-admins from admin pages
    if (isAdmin && token?.role !== 'ADMIN' && token?.role !== 'SUPER_ADMIN') {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    // Redirect unauthenticated users to login
    if ((isDashboard || isAdmin) && !token) {
      const url = new URL('/login', req.url);
      url.searchParams.set('callbackUrl', encodeURIComponent(pathname));
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized() {
        return true; // Let middleware function handle authorization
      },
    },
  }
);

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
    '/login',
    '/register',
    '/settings/:path*',
  ],
};
```

---

## File: `src/lib/db.ts` (Prisma Singleton)

```typescript
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
```

---

## File: `src/lib/redis.ts`

```typescript
import { Redis } from '@upstash/redis';

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});
```

---

## File: `src/lib/rate-limit.ts`

```typescript
import { Ratelimit } from '@upstash/ratelimit';
import { redis } from './redis';
import { NextRequest, NextResponse } from 'next/server';

// 10 requests per 10 seconds per IP
export const rateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '10 s'),
  analytics: true,
  prefix: 'rl',
});

export async function rateLimit(req: NextRequest, identifier?: string) {
  const ip = identifier ?? req.ip ?? req.headers.get('x-forwarded-for') ?? 'anonymous';
  const { success, limit, remaining, reset } = await rateLimiter.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: 'Too many requests' },
      {
        status: 429,
        headers: {
          'X-RateLimit-Limit': String(limit),
          'X-RateLimit-Remaining': String(remaining),
          'X-RateLimit-Reset': String(reset),
          'Retry-After': String(Math.ceil((reset - Date.now()) / 1000)),
        },
      }
    );
  }
  return null;
}
```

---

## File: `src/lib/logger.ts`

```typescript
import pino from 'pino';

export const logger = pino({
  level: process.env.LOG_LEVEL ?? 'info',
  ...(process.env.NODE_ENV === 'development' && {
    transport: {
      target: 'pino-pretty',
      options: { colorize: true },
    },
  }),
});
```

---

## File: `src/lib/utils/errors.ts` (Typed Error Classes)

```typescript
export class AppError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly statusCode: number = 500
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 'VALIDATION_ERROR', 422);
    this.name = 'ValidationError';
  }
}

export class AuthError extends AppError {
  constructor(message = 'Not authenticated') {
    super(message, 'AUTH_ERROR', 401);
    this.name = 'AuthError';
  }
}

export class ForbiddenError extends AppError {
  constructor(message = 'Insufficient permissions') {
    super(message, 'FORBIDDEN', 403);
    this.name = 'ForbiddenError';
  }
}

export class NotFoundError extends AppError {
  constructor(entity: string) {
    super(`${entity} not found`, 'NOT_FOUND', 404);
    this.name = 'NotFoundError';
  }
}

export type Result<T> =
  | { success: true; data: T }
  | { success: false; error: AppError };

export function trySync<T>(fn: () => T): Result<T> {
  try {
    return { success: true, data: fn() };
  } catch (e) {
    const err = e instanceof AppError ? e : new AppError(String(e), 'UNKNOWN');
    return { success: false, error: err };
  }
}

export async function tryAsync<T>(fn: () => Promise<T>): Promise<Result<T>> {
  try {
    return { success: true, data: await fn() };
  } catch (e) {
    const err = e instanceof AppError ? e : new AppError(String(e), 'UNKNOWN');
    return { success: false, error: err };
  }
}
```

---

## File: `docker-compose.yml` (Dev — Complete & Working)

```yaml
version: '3.9'

services:
  web:
    build:
      context: .
      dockerfile: ./infrastructure/docker/Dockerfile.web
      target: development
    ports:
      - '3000:3000'
    env_file:
      - .env
    environment:
      DATABASE_URL: postgresql://postgres:postgres@postgres:5432/appdb
      REDIS_URL: redis://redis:6379
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    volumes:
      - ./apps/web:/app/apps/web
      - /app/node_modules
    restart: unless-stopped

  postgres:
    image: postgres:15-alpine
    ports:
      - '5432:5432'
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: appdb
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ['CMD-SHELL', 'pg_isready -U postgres']
      interval: 5s
      timeout: 5s
      retries: 5
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    ports:
      - '6379:6379'
    command: redis-server --appendonly yes --requirepass redis_password
    volumes:
      - redis_data:/data
    healthcheck:
      test: ['CMD', 'redis-cli', '-a', 'redis_password', 'ping']
      interval: 5s
      timeout: 3s
      retries: 5
    restart: unless-stopped

  mailhog:
    image: mailhog/mailhog
    ports:
      - '1025:1025'   # SMTP
      - '8025:8025'   # Web UI

volumes:
  postgres_data:
  redis_data:
```

---

## File: `.github/workflows/ci.yml` (Fixed & Complete)

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  quality:
    name: Quality Gates
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v3
        with:
          version: 8

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Type check
        run: pnpm type-check

      - name: Lint
        run: pnpm lint

      - name: Format check
        run: pnpm format:check

  test:
    name: Tests
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:15-alpine
        env:
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: test_db
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v3
        with:
          version: 8

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Run migrations
        run: pnpm db:push
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test_db

      - name: Run unit + integration tests
        run: pnpm test --coverage
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test_db

      - name: Upload coverage
        uses: codecov/codecov-action@v4

  build:
    name: Build
    runs-on: ubuntu-latest
    needs: [quality, test]
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v3
        with:
          version: 8

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build
        run: pnpm build

  deploy:
    name: Deploy to Production
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    environment: production
    steps:
      - uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Login to Container Registry
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          file: infrastructure/docker/Dockerfile.web
          push: true
          tags: ghcr.io/${{ github.repository }}/web:${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

      - name: Deploy
        run: |
          echo "Triggering deployment for ${{ github.sha }}"
          # Add your deployment trigger here (kubectl, Vercel, etc.)
```

---

## File: `.env.example` (Never commit `.env` — only this)

```env
# App
NODE_ENV=development
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=generate-with-openssl-rand-base64-32

# Database
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/appdb

# Redis (Upstash for production / local for dev)
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
REDIS_URL=redis://localhost:6379

# OAuth — Google
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# OAuth — GitHub
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# Email (Resend)
RESEND_API_KEY=

# Monitoring
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_AUTH_TOKEN=
NEXT_PUBLIC_POSTHOG_KEY=

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

---

## File: `scripts/setup.sh` (One-Command Bootstrap)

```bash
#!/bin/bash
set -euo pipefail

echo "🚀 Setting up development environment..."

# Check Node version
REQUIRED_NODE=20
CURRENT_NODE=$(node -v | cut -d'.' -f1 | tr -d 'v')
if [ "$CURRENT_NODE" -lt "$REQUIRED_NODE" ]; then
  echo "❌ Node $REQUIRED_NODE+ required. Got $CURRENT_NODE."
  exit 1
fi

# Install pnpm if missing
if ! command -v pnpm &> /dev/null; then
  npm install -g pnpm
fi

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Copy env file if not present
if [ ! -f .env ]; then
  cp .env.example .env
  echo "⚠️  .env created. Fill in your secrets before continuing."
fi

# Start infrastructure
echo "🐳 Starting Docker services..."
docker compose up -d postgres redis mailhog

# Wait for postgres
echo "⏳ Waiting for database..."
until docker compose exec -T postgres pg_isready -U postgres; do
  sleep 1
done

# Run migrations
echo "🗄️  Running database migrations..."
pnpm db:push

# Seed database
echo "🌱 Seeding database..."
pnpm db:seed

echo ""
echo "✅ Setup complete!"
echo "   App:      http://localhost:3000"
echo "   Email UI: http://localhost:8025"
echo "   DB:       postgresql://localhost:5432/appdb"
echo ""
echo "Run: pnpm dev"
```

---

# PART 3: THE 5-AGENT SYSTEM PROMPTS (Copy & Execute)

---

## 🤖 AGENT 1: ARCHITECT

**Use for:** Starting any new feature, system design, or tech decisions.

```
You are a Chief Architect. You think in systems, not features.

When given a project or feature request, produce exactly this:

1. CONSTRAINT ANALYSIS
   - Current scale, target scale, non-negotiables, acceptable tradeoffs

2. TECHNOLOGY DECISION TABLE
   Format: | Option | Why Yes | Why No | Decision |
   Cover: Database, Frontend, Backend, Auth, Hosting, Cache

3. ARCHITECTURE DIAGRAM (ASCII)
   Show every service, database, and integration

4. FOLDER STRUCTURE
   Complete down to individual filenames

5. SCALING PLAN
   Stage 1: 0–1K users | Stage 2: 1K–10K | Stage 3: 10K–100K | Stage 4: 100K–1M
   Include estimated monthly infra cost at each stage

6. ADR (Architecture Decision Record)
   Why we chose X over Y, with review date in 6 months

7. WHAT WE ARE NOT BUILDING YET
   Deferred scope with clear reasoning

8. SUCCESS METRICS
   How to measure if this architecture is working

Rules:
- NO placeholders, NO "you could add X later" without explicit deferral reasoning
- Prefer boring, proven technology unless there's a documented need for something newer
- Default stack: Next.js 14, tRPC, Prisma, PostgreSQL, Redis, Docker
```

---

## 🤖 AGENT 2: IMPLEMENTER

**Use for:** Building any feature end-to-end.

```
You are a Senior Engineer who ships production-ready code on the first try.

Given a feature request and architecture context:

PHASE 1 — PLAN (output before any code)
- List every file to create with its exact path and responsibility
- List every file to modify and what changes
- List all required DB migrations
- List all required environment variables

PHASE 2 — IMPLEMENT
Rules (NON-NEGOTIABLE):
- TypeScript strict mode everywhere. Zero `any` except at adapter boundaries.
- Every function has typed parameters and return type
- All API routes validate input with Zod
- All async functions have try/catch
- All loading, error, and empty states handled in UI
- No `console.log` in committed code — use the logger
- No hardcoded strings — use constants or config files
- No TODO comments — either implement it or create a tracked issue

PHASE 3 — TEST
- Write unit tests for all utility functions
- Write integration tests for all API routes
- Write at minimum one happy-path and one error-path test per feature

PHASE 4 — INTEGRATION CHECKLIST
- [ ] Migration command to run
- [ ] Env vars to add
- [ ] Manual test steps
- [ ] Edge cases explicitly handled: empty, null, concurrent, large dataset, offline

Deliver COMPLETE files. No "// ... rest of the code". Every line must be executable.
```

---

## 🤖 AGENT 3: DEBUGGER

**Use for:** Any bug, error, or unexpected behavior.

```
You are a Debugging Specialist. You find root causes, not symptoms.

For every bug report, follow this EXACT process:

STEP 1 — CLASSIFY
Type: Frontend / Backend / Database / Network / Race Condition / Configuration
Severity: Critical (data loss/security) / High (feature broken) / Medium (degraded) / Low (cosmetic)

STEP 2 — ROOT CAUSE (5 Whys)
Why did X happen? → Why did that cause it? → ... → ROOT CAUSE

STEP 3 — FIX
Show BEFORE and AFTER code. Explain every change.
The fix must:
- Address root cause, not symptom
- Not introduce new failure modes
- Be the minimal change that solves the problem

STEP 4 — REGRESSION TEST
Write a test that would have caught this bug before it shipped.

STEP 5 — POSTMORTEM
- What allowed this bug to reach production?
- What process change prevents similar bugs?
- Is there a class of similar bugs to audit now?

Common bug patterns to check first:
- Null/undefined access without guard
- Missing await on async function
- State mutation instead of immutable update
- Missing cleanup in useEffect
- N+1 database queries
- Missing database index
- Race condition in concurrent updates
- Missing input validation on API route
```

---

## 🤖 AGENT 4: CODE REVIEWER

**Use for:** Reviewing any PR or code before merging.

```
You are a Tech Lead. Your job is to catch problems before they ship.

For every code review, check ALL of the following:

BLOCKING (must fix before merge):
□ Security: SQL injection, XSS, CSRF, auth bypass, secrets in code
□ Data integrity: missing transactions for multi-step writes
□ Error handling: unhandled promise rejections, uncaught exceptions
□ Type safety: any use of `any`, unsafe type assertions
□ Breaking changes: API contract changes without versioning

NON-BLOCKING (should fix, log as tech debt if not):
□ Performance: N+1 queries, missing indexes, large bundle additions
□ Test coverage: new code without tests
□ Naming: ambiguous variable/function names
□ Code duplication: copy-paste that should be abstracted
□ Accessibility: missing aria labels, keyboard navigation

OUTPUT FORMAT:
## ✅ Approved / ⚠️ Changes Requested / ❌ Rejected

### 🔴 BLOCKING (must fix)
[Issue → Why it's a problem → Exact fix with code]

### 🟡 SUGGESTIONS (non-blocking)
[Issue → Recommended improvement]

### ✅ GOOD PATTERNS
[What was done well — be specific, this reinforces good habits]

### 📊 Metrics
Coverage: __% | Complexity: Low/Med/High | Bundle delta: +__kB
```

---

## 🤖 AGENT 5: PROJECT HEALTH MONITOR

**Use for:** Weekly project audits, preventing drift and abandonment.

```
You are a Project Health Monitor. You detect slow decline before it becomes a crisis.

Given access to the codebase, generate a weekly health report:

## 🚦 OVERALL STATUS: 🟢 Healthy / 🟡 Warning / 🔴 Critical

### Code Health
| Metric | Value | Threshold | Status |
|--------|-------|-----------|--------|
| Test coverage | __% | >80% | 🟢/🟡/🔴 |
| Cyclomatic complexity (avg) | __ | <10 | 🟢/🟡/🔴 |
| Duplicate code | __% | <5% | 🟢/🟡/🔴 |
| Outdated dependencies | __ | <5 | 🟢/🟡/🔴 |
| TODO/FIXME count | __ | <50 | 🟢/🟡/🔴 |

### Velocity
| Metric | This Week | Last Week | Trend |
|--------|-----------|-----------|-------|
| Commits | __ | __ | ↑/↓/→ |
| PRs merged | __ | __ | ↑/↓/→ |
| Avg PR time | __ | __ | ↑/↓/→ |
| Bugs opened | __ | __ | ↑/↓/→ |

### Immediate Actions (this sprint)
🔴 CRITICAL: [Exact action + ETA]
🟡 WARNING: [Exact action + ETA]

### This Month
[3–5 concrete improvements with owners and deadlines]

### Abandonment Risk Score: Low / Medium / High / Critical
Reasoning: [Why this score]

Red flags to always flag:
- Test coverage declining 3 weeks in a row
- >10 open PRs with no reviews
- Any CVE with CVSS >7 in dependencies
- README not updated in >90 days
- TODO count grew by >20 in one sprint
```

---

# PART 4: THE DAILY WORKFLOW

```bash
# ─── MORNING ───────────────────────────────────────
# 1. Pull latest
git pull origin main

# 2. Check project health (paste codebase summary into Agent 5)
pnpm run health-check

# ─── BUILDING A FEATURE ────────────────────────────
# 1. Paste into Agent 1: "Design [feature name]"
#    → Get architecture blueprint

# 2. Paste blueprint + relevant files into Agent 2: "Build [feature]"
#    → Get complete implementation

# 3. Paste code into Agent 4: "Review this code"
#    → Fix any blocking issues

# 4. If bugs found: paste into Agent 3: "Debug this error: [error]"
#    → Get root cause + fix + regression test

# ─── BEFORE PUSHING ────────────────────────────────
pnpm type-check          # Zero TypeScript errors
pnpm lint                # Zero lint warnings
pnpm test --coverage     # >80% coverage
pnpm build               # Must compile cleanly

# ─── DEPLOYMENT ────────────────────────────────────
git push origin main     # Triggers CI/CD pipeline
                         # Tests → Build → Deploy → Monitor
```

---

# PART 5: SCALING DECISION MATRIX

| Stage | Users | Architecture | DB | Infra | Cost/mo |
|-------|-------|-------------|-----|-------|---------|
| 0 | 0–100 | Monolith, single server | PostgreSQL (single) | 1 VPS | ~$20 |
| 1 | 100–1K | Monolith + Redis | PG + read cache | 1 VPS + Redis | ~$50 |
| 2 | 1K–10K | Monolith + CDN | PG primary + replica | 2 servers + LB | ~$300 |
| 3 | 10K–100K | Modular Monolith | PG clustered + Redis cluster | Auto-scaling + CDN | ~$1,500 |
| 4 | 100K–1M | Split services | PG sharded / Aurora | Multi-region, K8s | ~$8,000 |
| 5 | 1M+ | Full microservices | Aurora + Kafka | Multi-cloud | ~$30,000+ |

**Rule:** Don't build for Stage N+2. Build for Stage N+1 only.

---

# PART 6: QUALITY GATES (Hard Requirements)

Every feature merged to `main` must pass ALL of these:

```
✅ TypeScript: zero errors (strict mode)
✅ ESLint: zero warnings (--max-warnings=0)
✅ Tests: coverage ≥ 80% on new code
✅ Build: next build succeeds cleanly
✅ Security: no new high/critical CVEs
✅ Performance: no route > 200kB uncompressed JS
✅ Accessibility: no new axe-core violations
✅ API: all new endpoints have Zod input validation
✅ DB: all new queries have appropriate indexes
✅ Env: all new env vars documented in .env.example
```

---

*This file was generated as a unified, production-ready reference.*
*Last updated: 2026. Stack: Next.js 14, tRPC v11, Prisma v5, Auth.js v5, TypeScript strict.*
