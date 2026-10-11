# 🛒 বাজার দর (BazarDor)

বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের আজকের বাজারদর এক জায়গায়। চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম-দুধ ও মসলার দাম, দেশের ৬টি বিভাগের ১২টি বাজারের তুলনা, এবং দামের ওঠানামা এক নজরে।

**Live Site:** https://bazardor-mu-red.vercel.app

## ✨ Key Features

1. **Live price ticker:** নেভবারের নিচে সব পণ্যের দাম ও পরিবর্তনের (▲/▼ %) অবিরাম স্ক্রলিং স্ট্রিপ
2. **Price movers:** হোম পেজে আজ যেসব পণ্যের দাম সবচেয়ে বেশি বেড়েছে ও কমেছে, তার টপ ৬
3. **Category browsing with sorting:** ক্যাটাগরি অনুযায়ী পণ্য, দাম অনুযায়ী কম থেকে বেশি / বেশি থেকে কম সাজানো (বাংলা সংখ্যাসহ সঠিক numeric sort)
4. **Protected product details:** লগইন করা ইউজারের জন্য প্রতিটি পণ্যের সর্বনিম্ন, সর্বোচ্চ ও গড় দাম এবং ১২টি বাজারের দামের টেবিল
5. **Authentication:** BetterAuth দিয়ে Email/Password ও GitHub লগইন, সাইন আউট, এবং প্রতিটি অ্যাকশনে toast নোটিফিকেশন
6. **Profile management:** "My Profile" পেজ থেকে নাম আপডেট করার সুবিধা
7. **Fully Bangla UI:** বাংলা সংখ্যা, বাংলা তারিখ ও Hind Siliguri ফন্ট
8. **Responsive design:** মোবাইল, ট্যাবলেট ও ডেস্কটপে সমানভাবে ব্যবহারযোগ্য, সাথে skeleton loading ও কাস্টম 404 পেজ

## 🛠️ Technologies Used

- **Next.js 16** (App Router, Server & Client Components)
- **React 19**
- **Tailwind CSS 4** + **DaisyUI 5**
- **BetterAuth** (Email/Password + GitHub OAuth)
- **MongoDB Atlas** (auth database)
- **react-hot-toast** (notifications)
- **react-icons**
- **Vercel** (deployment)

## 🚀 Run Locally

```bash
git clone https://github.com/ArifBillah792/bazardor.git
cd bazardor
npm install
```

Create a `.env` file in the project root:

```
NEXT_PUBLIC_API_URL=https://openapi.programming-hero.com/api/bazardor
MONGODB_URL=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

Then start the dev server:

```bash
npm run dev
```

Open http://localhost:3000
