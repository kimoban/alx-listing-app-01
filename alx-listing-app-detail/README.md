# 🏠 ALX Listing App 01

A comprehensive property listing application built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. This enhanced version features detailed property pages, interactive booking systems, and comprehensive review sections.

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-38B2AC)](https://tailwindcss.com)

## 🚀 Quick Start

First, install dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn install && yarn dev
# or
pnpm install && pnpm dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🏗️ Project Structure](#️-project-structure)
- [💻 Components Overview](#-components-overview)
- [🚀 Getting Started](#-getting-started)
- [📱 Usage Examples](#-usage-examples)
- [🎨 Design Highlights](#-design-highlights)
- [🔧 Development](#-development)
- [📸 Screenshots](#-screenshots)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)

---

## ✨ Features

### 🏡 **Property Listings**
- **Responsive Grid Layout** - Properties displayed in adaptive grid (1-3 columns)
- **Property Cards** - Rich cards with images, ratings, pricing, and location
- **Navigation Links** - Click-through to detailed property pages

### 🏠 **Detailed Property Pages**
- **Dynamic Routing** - `/property/[id]` with URL-safe property names
- **Comprehensive Property Display** with multiple sections:
  - **Breadcrumb Navigation** for easy navigation
  - **Image Gallery** with main image and thumbnail grid
  - **Tabbed Interface** for organized content display
  - **Property Information** including ratings, location, and pricing

### 🎯 **Interactive Booking System**
- **Date Selection** with check-in/check-out pickers
- **Guest Management** - Adults, children, and infant selection
- **Real-time Price Calculation** with service fees and taxes
- **Responsive Booking Form** with gradient styling
- **Input Validation** and user-friendly interface

### ⭐ **Review & Rating System**
- **Star Rating Display** with visual rating indicators
- **Review Cards** with user avatars and detailed feedback
- **Review Statistics** including overall ratings and review counts
- **Interactive Elements** with hover effects and responsive design

### 🎨 **Modern UI/UX**
- **Tailwind CSS** styling with custom gradients and animations
- **Next.js Image Optimization** for fast loading
- **Responsive Design** across all device sizes
- **Accessibility Features** with ARIA labels and semantic HTML
- **TypeScript Integration** for type safety and better development experience

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.3.5 | React framework with SSR, routing, and optimization |
| **React** | 19.0.0 | Component-based UI library |
| **TypeScript** | 5.0+ | Static type checking and enhanced developer experience |
| **Tailwind CSS** | 3.0+ | Utility-first CSS framework for rapid styling |
| **Next.js Image** | Built-in | Optimized image loading and performance |

---

## 🏗️ Project Structure

```
alx-listing-app-01/
│
├── components/
│   ├── common/
│   │   ├── button.tsx          # Reusable button component
│   │   └── Card.tsx            # Generic card component
│   │
│   ├── layout/
│   │   ├── Header.tsx          # Application header
│   │   ├── Footer.tsx          # Application footer
│   │   └── Layout.tsx          # Main layout wrapper
│   │
│   ├── property/
│   │   ├── PropertyDetail.tsx   # 🆕 Main property display component
│   │   ├── BookingSection.tsx   # 🆕 Interactive booking form
│   │   └── ReviewSection.tsx    # 🆕 Review display system
│   │
│   └── ui/
│       ├── FilterPill.tsx      # Filter components
│       └── PropertyCard.tsx    # Property card display
│
├── constants/
│   └── index.ts                # Property data and sample listings
│
├── interfaces/
│   └── index.ts                # TypeScript interfaces and types
│
├── pages/
│   ├── _app.tsx               # App configuration
│   ├── _document.tsx          # Document configuration
│   ├── index.tsx              # Home page with property listings
│   ├── home.tsx               # Alternative home page layout
│   │
│   ├── property/
│   │   └── [id].tsx           # 🆕 Dynamic property detail pages
│   │
│   └── api/
│       └── hello.ts           # API routes
│
├── public/
│   ├── assets/                # Property images and media
│   └── *.svg                  # Icons and graphics
│
├── styles/
│   └── globals.css            # Global styles and Tailwind imports
│
├── next.config.ts             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

---

## 💻 Components Overview

### 🏠 **PropertyDetail.tsx**
The centerpiece component featuring:
- **Responsive Layout** with breadcrumbs and navigation
- **Image Gallery** with main display and thumbnail grid
- **Tabbed Interface** for Description, Amenities, and Reviews
- **Integration** with BookingSection and ReviewSection
- **TypeScript** typed with PropertyProps interface

### 💳 **BookingSection.tsx**
Interactive booking system with:
- **Date Pickers** for check-in/check-out selection
- **Guest Selection** with increment/decrement controls
- **Price Calculation** with service fees and tax computation
- **Responsive Design** with gradient backgrounds
- **Form Validation** and state management

### ⭐ **ReviewSection.tsx**
Comprehensive review display featuring:
- **Star Rating System** with visual indicators
- **User Reviews** with avatars and detailed feedback
- **Review Statistics** and overall ratings
- **Responsive Cards** with hover animations
- **Empty State Handling** for properties without reviews

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or later
- **npm**, **yarn**, or **pnpm** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kimoban/alx-listing-app-01.git
   cd alx-listing-app-01
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3001](http://localhost:3001) to see the application.

### Build for Production

```bash
npm run build
npm start
```

---

## 📱 Usage Examples

### Viewing Properties
- Visit the home page to see all available properties
- Click on any property card to view detailed information
- Use the navigation breadcrumbs to return to the property list

### Property Detail Pages
```
http://localhost:3001/property/Villa%20Ocean%20Breeze
http://localhost:3001/property/Mountain%20Retreat%20Lodge
```

### Booking Interaction
1. Select check-in and check-out dates
2. Choose number of guests (adults, children, infants)
3. View real-time price calculations
4. Submit booking (demo functionality)

### Review System
- View property ratings and reviews
- Browse user feedback with star ratings
- See reviewer information and avatars

---

## 🎨 Design Highlights

### 🎯 **Responsive Design**
- **Mobile-first** approach with Tailwind CSS
- **Adaptive layouts** that work on all screen sizes
- **Touch-friendly** interfaces for mobile devices

### 🌈 **Visual Elements**
- **Gradient backgrounds** for modern appeal
- **Smooth animations** and hover effects
- **Optimized images** with Next.js Image component
- **Consistent typography** and spacing

### ♿ **Accessibility**
- **ARIA labels** for screen readers
- **Semantic HTML** structure
- **Keyboard navigation** support
- **High contrast** color schemes

---

## 🔧 Development

### Code Structure
The project follows **component-based architecture** with:
- **Separation of concerns** between UI, logic, and data
- **TypeScript interfaces** for type safety
- **Reusable components** for maintainability
- **Consistent naming conventions**

### Key Development Decisions
- **Next.js Pages Router** for simple routing
- **Static data** in constants for demo purposes
- **Tailwind CSS** for rapid styling
- **TypeScript** for enhanced developer experience

### Development Scripts
```bash
npm run dev        # Development server
npm run build      # Production build
npm run start      # Production server
npm run lint       # ESLint checking
```

---

## 📸 Screenshots

### 🏠 Property Listings Page
![Property Listings](./screenshots/property-listings.png)
*Main page showing responsive grid of property cards*

### 🏡 Property Detail Page
![Property Detail](./screenshots/property-detail.png)
*Detailed property view with image gallery and tabbed content*

### 💳 Booking Section
![Booking Section](./screenshots/booking-section.png)
*Interactive booking form with price calculations*

### ⭐ Reviews Section
![Reviews](./screenshots/reviews-section.png)
*Review display with star ratings and user feedback*

> 💡 **Note**: Screenshots can be added to a `/screenshots` directory for documentation.

---

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with each push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` directory to Netlify
3. Configure redirects for client-side routing

### GitHub Pages
```bash
npm run build
npm run export
# Deploy the `out` directory
```

---

## 🔮 Future Enhancements

### 🛠️ **Planned Features**
- [ ] **User Authentication** with login/signup
- [ ] **Real Booking System** with payment integration
- [ ] **Property Search** with filters and sorting
- [ ] **Map Integration** for property locations
- [ ] **User Dashboard** for booking management
- [ ] **Property Management** for hosts
- [ ] **Real-time Chat** between guests and hosts

### 🎯 **Technical Improvements**
- [ ] **Database Integration** (PostgreSQL/MongoDB)
- [ ] **API Routes** for data management
- [ ] **State Management** with Redux or Zustand
- [ ] **Testing Suite** with Jest and React Testing Library
- [ ] **Performance Optimization** with lazy loading
- [ ] **SEO Enhancement** with meta tags and structured data

---

## 🤝 Contributing

We welcome contributions to improve the ALX Listing App! Here's how you can help:

### Getting Started
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Contribution Guidelines
- Follow the existing **code style** and conventions
- Add **TypeScript types** for new components
- Include **responsive design** considerations
- Test your changes on **multiple devices**
- Update **documentation** for new features

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **ALX Africa** - For the comprehensive Frontend ProDev program
- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Vercel** - For hosting and deployment platform
- **TypeScript** - For type-safe JavaScript development

---

## 📞 Contact & Support

- **Repository**: [https://github.com/kimoban/alx-listing-app-01](https://github.com/kimoban/alx-listing-app-01)
- **Issues**: [Report bugs or request features](https://github.com/kimoban/alx-listing-app-01/issues)
- **Discussions**: [Join community discussions](https://github.com/kimoban/alx-listing-app-01/discussions)

---

<div align="center">

**Built with ❤️ as part of the ALX Frontend ProDev Program**

[![ALX](https://img.shields.io/badge/ALX-ProDev-orange)](https://alxafrica.com/)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://typescriptlang.org)

</div>
