# SaaS Products Management Guide

## Quick Start: Adding Your New SaaS Products

Your SaaS products are centrally managed in `/data/saas-products.ts`. This makes it easy to add, modify, or remove products as you build them.

## 📍 Key Files

1. **`/data/saas-products.ts`** - Main product catalog (edit this to add/modify products)
2. **`/app/saas/page.tsx`** - Dedicated SaaS products showcase page
3. **`/data/pricing.ts`** - Overall pricing page that includes SaaS + services

## ✨ How to Add a New SaaS Product

1. Open `/data/saas-products.ts`
2. Copy the template at the bottom of the file
3. Fill in your product details:

```typescript
{
  id: 'your-product-slug',
  name: 'Your Product Name',
  tagline: 'One-line description',
  description: 'Longer description of what it does',
  icon: '🚀', // Choose an emoji
  status: 'coming-soon', // or 'beta' or 'live'
  pricing: {
    starter: {
      price: 29,
      period: 'month',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3'
      ],
      limits: {
        users: 10,
        storage: '10GB'
      }
    },
    professional: {
      price: 99,
      period: 'month',
      features: [
        'All Starter features',
        'Advanced feature 1',
        'Advanced feature 2'
      ],
      limits: {
        users: 100,
        storage: '100GB'
      },
      highlighted: true
    },
    enterprise: {
      price: 'custom',
      features: [
        'Everything in Professional',
        'Custom features',
        'Dedicated support'
      ]
    }
  },
  demoUrl: 'https://demo.yourproduct.com', // Optional
  launchDate: 'Q3 2026'
}
```

4. Save the file
5. Run `npm run build` to verify
6. Deploy with `vercel --prod --yes`

## 🎯 Product Status Options

- **`coming-soon`** - Shows in "Coming Soon" section (not in main pricing)
- **`beta`** - Shows with yellow "Beta" badge
- **`live`** - Shows with green "Live" badge (fully available)

## 💰 Pricing Tiers

Each product has 3 tiers:
- **Starter** - Entry-level pricing
- **Professional** - Most popular (highlighted automatically)
- **Enterprise** - Custom pricing

## 📊 Current Products

1. **Project Manager Pro** - AI-powered project management ($49-$149/mo)
2. **DevOps Suite** - CI/CD automation ($99-$299/mo) 
3. **Analytics Hub** - Data intelligence ($79-$249/mo)

## 🔗 Live URLs

- **Main SaaS Page**: https://ironhelix.vercel.app/saas
- **Pricing Overview**: https://ironhelix.vercel.app/pricing
- **Services Page**: https://ironhelix.vercel.app/services

## 🎨 Customization Tips

### Change Pricing
Edit the `price` field in each tier.

### Add/Remove Features
Modify the `features` array in any tier.

### Update Limits
Change `limits` object (users, storage, requests, projects).

### Add Demo Link
Set `demoUrl` to your demo site URL.

### Change Icon
Use any emoji or update icon system.

## 🚀 Quick Deploy

After making changes:
```bash
npm run build
vercel --prod --yes
```

## 📝 Notes

- The template product at the end of `saas-products.ts` is filtered out automatically
- Products are shown on `/saas` page based on status
- Main pricing page at `/pricing` includes first 3 SaaS tiers in overview
- Navigation automatically includes "SaaS Products" link

