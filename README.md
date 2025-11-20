# Pandit Rajkumar Ji - Vedic Astrology Website

A comprehensive, premium astrology website for Pandit Rajkumar Ji, featuring modern design with traditional Vedic elements.

## 🌟 Features

### Frontend
- **Home Page**: Premium hero section with animated backgrounds, testimonials slider, and Vedic theme
- **About Page**: Complete introduction with achievements, timeline, and trust-building elements
- **Services Page**: Clean service cards for Kundli Reading and Question Reading with consultation modes
- **Booking Page**: Comprehensive consultation booking form with validation
- **Contact Page**: Contact form, map integration, and WhatsApp integration
- **Admin Dashboard**: Simple, clean admin interface for managing bookings and services

### Backend
- **Database**: SQLite with Prisma ORM for bookings and contact messages
- **API Routes**: RESTful APIs for bookings, contact forms, and admin functionality
- **Authentication**: Ready for NextAuth.js integration

### Design Features
- **Premium Golden Theme**: Maroon and gold color scheme with spiritual ambiance
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Smooth transitions, hover effects, and loading states
- **Components**: Built with shadcn/ui component library
- **Typography**: Inter font for clean, modern text

## 🛠 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (New York style)
- **Database**: SQLite with Prisma ORM
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/
│   ├── about/           # About page
│   ├── admin/           # Admin dashboard
│   ├── api/             # API routes
│   │   ├── bookings/    # Booking management
│   │   ├── contact/     # Contact form
│   │   └── admin/       # Admin APIs
│   ├── booking/         # Booking page
│   ├── contact/         # Contact page
│   ├── services/        # Services page
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Navigation.tsx   # Site navigation
│   └── Footer.tsx       # Site footer
└── lib/
    └── db.ts            # Database client
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up the database**:
   ```bash
   npm run db:push
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with animated golden aura
- Why Choose Us cards with key benefits
- Testimonials slider with client reviews
- Vedic background section with spiritual elements

### About Page (`/about`)
- Pandit Rajkumar Ji's introduction
- Professional achievements and recognition
- Timeline of 25+ years of experience
- What makes the service unique

### Services Page (`/services`)
- Kundli Reading service (₹2100)
- One Question Reading with multiple consultation modes:
  - Chat: ₹500 (30 minutes)
  - Phone: ₹1100 (45 minutes)
  - Video: ₹1600 (60 minutes)
- Comparison table of consultation modes

### Booking Page (`/booking`)
- Comprehensive booking form with validation
- Birth details collection for accurate predictions
- Service and consultation type selection
- Order summary with pricing

### Contact Page (`/contact`)
- Contact form with validation
- Contact information display
- WhatsApp integration button
- Map placeholder for office location

### Admin Dashboard (`/admin`)
- Booking management interface
- Statistics dashboard
- Service management
- Payment history
- Message center

## 🎨 Design System

### Color Palette
- **Primary**: Amber/Gold gradient (#f59e0b to #eab308)
- **Background**: Slate-900 to amber-950 gradient
- **Text**: White for headings, amber-100 for body text
- **Accent**: Golden borders and highlights

### Typography
- **Headings**: Bold, large with golden gradient effects
- **Body**: Clean, readable with proper contrast
- **UI Elements**: Consistent sizing and spacing

### Components
- **Cards**: Glassmorphism effect with golden borders
- **Buttons**: Rounded-full with gradient backgrounds
- **Forms**: Clean validation with amber accents
- **Navigation**: Sticky header with mobile responsiveness

## 🔧 Development

### Code Quality
- ESLint configuration for consistent code style
- TypeScript for type safety
- Component-based architecture
- Proper error handling and loading states

### Database Schema
- **Booking**: Stores consultation bookings with status tracking
- **ContactMessage**: Stores contact form submissions

### API Endpoints
- `POST /api/bookings` - Create new booking
- `GET /api/bookings` - List all bookings
- `PATCH /api/admin/bookings/[id]` - Update booking status
- `POST /api/contact` - Submit contact form
- `GET /api/admin/bookings` - Admin booking list

## 🌟 Key Features Implemented

### ✅ Completed
- All 6 pages as specified
- Premium golden theme with Vedic elements
- Responsive design for all devices
- Database integration with Prisma
- API routes for booking and contact
- Admin dashboard for management
- Custom animations and transitions
- Form validation and error handling
- Mobile-friendly navigation
- SEO optimization with proper metadata

### 🎯 Design Highlights
- Spiritual ambiance with mandala and zodiac elements
- Smooth animations and hover effects
- Premium golden highlights throughout
- Clean, uncluttered layouts
- Trust-building elements and testimonials
- Professional color harmony

## 📞 Contact Information
- **Phone**: +91 98765 43210
- **Email**: panditrajkumar@vedicastrology.com
- **Address**: 123, Spiritual Complex, Old Delhi, Delhi - 110006

## 🙏 Acknowledgments
This website combines modern web development with traditional Vedic wisdom to create a premium online presence for Pandit Rajkumar Ji's astrology services.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS