# AI Career Coach 🚀

AI Career Coach is a comprehensive career development platform that helps users build resumes, generate tailored cover letters, and practice interviews with AI assistance. It's a one-stop career toolkit designed to boost confidence, optimize applications, and accelerate job searches.

## ✨ Features

- **AI-Powered Resume Builder** - Create professional resumes with AI-generated content and ATS optimization
- **Smart Cover Letter Generator** - Generate personalized cover letters based on job descriptions
- **Interview Practice** - AI-powered mock interviews with real-time feedback
- **Career Assessments** - Technical and behavioral skill assessments with improvement tips
- **Industry Insights** - Salary data, market trends, and skill recommendations
- **User Authentication** - Secure login with NextAuth (Credentials + Prisma)
- **Responsive Design** - Modern UI built with Tailwind CSS and Radix UI

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth (Credentials) with Prisma Adapter
- **AI Integration**: Google Gemini AI
- **UI Components**: Radix UI, Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS with custom animations
- **Deployment**: Vercel-ready

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.17 or higher)
- **npm** or **yarn** package manager
- **PostgreSQL** database
- **Git**

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ai-career-coach.git
cd ai-career-coach
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/ai_career_coach"

# Authentication (NextAuth)
NEXTAUTH_SECRET=your_long_random_secret
# Required in production; optional in local dev
# NEXTAUTH_URL=http://localhost:3000

# AI Integration (Google Gemini)
GEMINI_API_KEY=your_gemini_api_key

# Inngest (Background Jobs)
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
INNGEST_SERVE_URL=http://localhost:3000/api/inngest
```

### 4. Database Setup

#### Option A: Local PostgreSQL
1. Install PostgreSQL on your system
2. Create a new database:
   ```sql
   CREATE DATABASE ai_career_coach;
   ```
3. Update the `DATABASE_URL` in your `.env.local` file

#### Option B: Supabase (Recommended for development)
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Get your database connection string from Settings > Database
3. Update the `DATABASE_URL` in your `.env.local` file

### 5. Run Database Migrations

```bash
npx prisma migrate dev
npx prisma generate
```

### 6. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🔑 API Keys Setup

### NextAuth Authentication
This project uses email/password credentials with NextAuth and a Prisma adapter.

1. Set `NEXTAUTH_SECRET` in your `.env.local` (use a strong random string)
2. Start the dev server and open `http://localhost:3000/auth/signup` to create an account
3. Sign in at `http://localhost:3000/auth/signin`
4. In production, set `NEXTAUTH_URL` to your deployed URL

### Google Gemini AI
1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Create a new API key
3. Add the API key to your `.env.local` file

### Inngest (Optional)
1. Go to [inngest.com](https://inngest.com) and create an account
2. Create a new project
3. Get your event key and signing key
4. Add them to your `.env.local` file

## 📁 Project Structure

```
ai-career-coach/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication layouts
│   ├── auth/              # Sign in / sign up pages
│   ├── (main)/            # Main application routes
│   ├── api/               # API endpoints
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── components/             # Reusable UI components
├── actions/                # Server actions
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and configurations
├── prisma/                 # Database schema and migrations
├── public/                 # Static assets
└── data/                   # Static data files
```

## 🗄️ Database Schema

The application uses the following main models (simplified):

- **User**: User profiles with industry and experience information
- **Resume**: User resumes with ATS scoring and feedback
- **CoverLetter**: Generated cover letters for specific job applications
- **Assessment/Interview**: Mock interview quizzes and results

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality
- `npm run postinstall` - Generate Prisma client after installation

## 🧪 Testing

```bash
# Run linting
npm run lint
```

## 📦 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

When deploying, remember to set:
- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL` (your public app URL)
- `GEMINI_API_KEY`
- `INNGEST_*` keys if using Inngest

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom configurations. See `tailwind.config.mjs` for customization options.

### Prisma
Database schema and migrations are managed through Prisma. The schema file is located at `prisma/schema.prisma`.

### ESLint
Code quality is enforced through ESLint with Next.js recommended rules. Configuration is in `eslint.config.mjs`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


If you encounter any issues:

1. Check the [Issues](https://github.com/yourusername/ai-career-coach/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- AI powered by [Google Gemini](https://aistudio.google.com/)
- Authentication by [NextAuth](https://next-auth.js.org/)

---

**Happy coding! 🎉**

If you find this project helpful, please give it a ⭐ star!
