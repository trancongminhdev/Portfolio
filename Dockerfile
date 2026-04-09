# ========================
# STAGE 1: deps
# Chỉ install dependencies
# ========================
FROM node:20-alpine AS deps

# Cài libc6-compat để tránh lỗi trên Alpine với một số native modules
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy RIÊNG package.json trước — Docker cache layer này
# Nếu code thay đổi nhưng package.json không đổi → bỏ qua bước npm install
COPY package.json package-lock.json ./

RUN npm ci


# ========================
# STAGE 2: builder
# Build source code
# ========================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy deps đã install từ stage 1
COPY --from=deps /app/node_modules ./node_modules

# Giờ mới copy toàn bộ source code
COPY . .

# Tắt Next.js telemetry khi build
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build


# ========================
# STAGE 3: runner
# Image production — nhỏ gọn nhất
# ========================
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Tạo user riêng, KHÔNG chạy bằng root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Chỉ copy đúng những gì cần để chạy
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Chạy bằng user nextjs, không phải root
USER nextjs

EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]