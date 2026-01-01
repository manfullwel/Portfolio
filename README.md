# The Gem & The Anchor - Next.js

A romantic, interactive landing page celebrating Patricia and Igor's journey.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB database (local or cloud)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   
   Edit `.env.local` and add your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
lovely/
├── app/
│   ├── api/
│   │   └── plans/
│   │       └── route.js       # API endpoints
│   ├── globals.css            # Global styles
│   ├── layout.js              # Root layout
│   └── page.js                # Main page component
├── lib/
│   └── mongodb.js             # MongoDB connection
├── models/
│   └── Plan.js                # Mongoose schema
├── .env.local                 # Environment variables
├── next.config.js             # Next.js config
├── tailwind.config.js         # Tailwind config
└── package.json               # Dependencies
```

## ✨ Features

- **Tornado → Heart Animation**: Framer Motion transformation on load
- **35 Days Timeline**: Auto-progressing timeline with milestones
- **Interactive Cusco Section**: Romantic visualization of future home
- **"Carne e Osso" Test**: Clickable elements proving real-world connection
- **Thoughts Form**: MongoDB-connected message submission
- **Mouse Tracking**: Particle system following cursor
- **Confetti Effects**: Celebration on form submission
- **Responsive Design**: Mobile-first approach

## 🎨 Design Philosophy

**Strength meets Elegance** - Inspired by Patricia's resilience and the beauty of Cusco:
- **Glassmorphism**: Modern transparency effects
- **Earth Tones**: Amber, terracotta, sand (Cusco)
- **Neon Accents**: Pink, purple (modernity & romance)
- **Solid Foundations**: Clear hierarchy for trust

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: MongoDB + Mongoose
- **Icons**: Lucide React
- **Effects**: React Confetti

## 📝 Environment Variables

Create a `.env.local` file with:

```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add `MONGODB_URI` in Environment Variables
4. Deploy!

### Other Platforms

Works with any Node.js hosting:
- Netlify
- Railway
- Render
- AWS Amplify

## 💝 The Story

This is a celebration of Patricia ("The Peruvian Tornado") and Igor ("The Anchor"), marking their journey from a language app connection to concrete plans for a future together in Cusco.

---

Built with ❤️ by Igor for Patricia
