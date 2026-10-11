# 🛒 বাজার দর (BazarDor)

## Short Description

বাজার দর is a web app that shows today's prices of everyday essentials in Bangladesh, such as rice, lentils, oil, vegetables, fish, meat, eggs, milk and spices. Users can see which prices went up or down today, browse products by category, and (after logging in) compare each product's price across 12 markets in 6 divisions.

## Technologies Used

- Next.js (App Router)
- React
- JavaScript
- Tailwind CSS
- DaisyUI
- BetterAuth (Email/Password, Google, GitHub)
- MongoDB Atlas
- react-hot-toast
- react-icons
- Vercel

## Key Features

1. **Live price ticker:** an infinite scrolling strip below the navbar showing every product's price and change (▲/▼ %).

2. **Today's price movers:** the home page highlights the top 6 products whose prices rose and the top 6 whose prices fell today.

3. **Category pages with sorting:** browse products by category and sort by price (low to high / high to low), using numeric values so Bengali numerals sort correctly.

4. **Protected product details:** logged-in users see each product's minimum, maximum and average price, plus a market-by-market price table.

5. **Authentication & profile:** sign up / sign in with Email & Password, Google or GitHub using BetterAuth, with toast notifications, and update your name from the My Profile page.
