# ALX Listing App 00

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## 🏠 ALX Listing App 00

A responsive property listing page built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This project displays a collection of luxury properties with filtering capabilities and a clean, responsive UI.

---

## 🚀 Project Overview

This project is part of **Milestone 2** in the ALX Frontend ProDev program. It involves building a responsive, accessible, and component-driven listing page that:

- Displays a grid of luxury properties
- Implements responsive layout principles
- Allows filtering by property features
- Uses typed data structures with TypeScript
- Follows best practices in layout, design, and accessibility

---

## ✨ Features

- 🔍 Hero section with call-to-action text and image
- 🔎 Search functionality (placeholder)
- 🏷️ Filter pills to refine results
- 📋 Property cards displaying:
  - Image
  - Name
  - Address
  - Rating
  - Price
- ✅ Fully responsive across mobile, tablet, and desktop
- ⚛️ Reusable layout components: Header, Footer, Layout
- 📦 Typed with TypeScript for safety and clarity

---

## 🛠️ Tech Stack

| Tech          | Description                       |
|---------------|-----------------------------------|
| **Next.js**   | React framework with SSR support  |
| **TypeScript**| Static type-checking for JS       |
| **Tailwind CSS** | Utility-first CSS framework   |

---

## 🗂️ Project Structure

alx-listing-app-00/
│
├── components/
│ └── layout/
│ ├── Header.tsx
│ ├── Footer.tsx
│ └── Layout.tsx
│
├── constants/
│ └── index.ts # Contains property data
│
├── interfaces/
│ └── index.ts # PropertyProps interface
│
├── pages/
│ ├── _app.tsx # App layout wrapper
│ └── index.tsx # Hero, Filters, Listings
│
├── public/
│ └── hero.jpg # Background image for hero
│
├── styles/
│ └── globals.css
│
└── tailwind.config.js

yaml
Copy
Edit

---

## 📸 Screenshots

| Hero Section                       | Property Grid                       |
|-----------------------------------|-------------------------------------|
| ![hero](./screenshots/hero.png)   | ![listings](./screenshots/listings.png) |

> ⚠️ You must manually create `/screenshots` and add your screenshots.

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/alx-listing-app-00.git
cd alx-listing-app-00
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the Development Server
bash
Copy
Edit
npm run dev
Open http://localhost:3000 to view it in your browser.

✅ Functional Requirements Checklist
 Hero section implemented
✅ Functional Requirements Checklist
Hero section implemented

 Property data defined in constants

 Interface typed with TypeScript

 Filter pills for category filtering

 Responsive design with Tailwind CSS

🧠 Learning Objectives Met
✅ Implement responsive web design with Tailwind CSS

✅ Use TypeScript for typing components and data

✅ Build reusable layout components

✅ Map dynamic data from arrays to UI

✅ Apply filtering logic with React state

✅ Organize project with logical folder hierarchy

📌 Future Improvements
✅ Lazy loading images

❌ Sorting by price/rating

❌ Search bar functionality

❌ Modal for property details

❌ Pagination / infinite scroll

📜 License
This project is licensed under the MIT License.

🤝 Acknowledgments
Developed as part of the ALX Frontend ProDev Milestone 2 challenge.

Thanks to the ALX team and community for the learning journey!
