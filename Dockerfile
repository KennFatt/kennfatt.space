FROM node:22.17-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY package.json package-lock.json* ./

RUN \
    if [ -f package-lock.json ]; then npm ci; \
    else echo "Lockfile not found." && exit 1; \
    fi

FROM base AS builder

ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG GRAPHCMS_URI
ARG GRAPHCMS_TOKEN
ENV GRAPHCMS_URI=$GRAPHCMS_URI
ENV GRAPHCMS_TOKEN=$GRAPHCMS_TOKEN
RUN npm i --cpu=x64 --os=linux --libc=musl sharp
RUN npm run build

FROM base AS runner

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 9090
ENV PORT 9090

CMD ["node", "server.js"]