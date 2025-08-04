# Auto100 - Webflow DevLink + SQLite

A modern automotive website built with Next.js, Webflow DevLink, and SQLite database.

## 🚀 Features

- **Webflow DevLink** - Visual components synced from Webflow
- **Next.js 14** - React framework with TypeScript
- **SQLite Database** - Lightweight database for storing:
  - Car inventory
  - User inquiries
  - Test drive bookings
  - Contact form submissions

## 📁 Project Structure

```
/home/sk/auto/milenium/
├── devlink/              # Webflow synced components
├── src/app/              # Next.js app directory
├── prisma/               # Database schema
├── public/               # Static assets
└── lib/                  # Database utilities
```

## 🛠️ Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up database:
   ```bash
   npx prisma init
   npx prisma db push
   ```

3. Sync Webflow components:
   ```bash
   npm run sync
   ```

4. Run development server:
   ```bash
   npm run dev
   ```

## 🔧 Environment Variables

Create `.env.local`:
```env
WEBFLOW_SITE_ID=your_site_id
WEBFLOW_SITE_API_TOKEN=your_api_token
DATABASE_URL="file:./dev.db"
```

## 📦 Tech Stack

- Next.js 14
- TypeScript
- Webflow DevLink
- SQLite + Prisma
- Tailwind CSS

## 🚀 Deployment

Deploy to Vercel or any Node.js hosting platform.
