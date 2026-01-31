# LMMRodeo - TM4 Framework Website

A governance framework for honest autonomous evolution.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:3000` to see the site.

## 📧 Setting Up the Contact Form

The contact form uses **Formspree** for email functionality. To make it work:

### Step 1: Create a Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account
3. Create a new form

### Step 2: Get Your Form ID
After creating a form, you'll get a form ID that looks like: `xyzabc123`

### Step 3: Update the Contact Page
Open `src/app/contact/page.tsx` and find line 22:

```typescript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
```

Replace `YOUR_FORM_ID` with your actual Formspree form ID:

```typescript
const response = await fetch("https://formspree.io/f/xyzabc123", {
```

### Step 4: Update Email Address
Also update the email address in:
- `src/app/contact/page.tsx` (line 268) - Direct email link
- Any other references to `contact@lmmrodeo.com`

Replace with your actual email address.

## 🎨 Features

- **7 Pages**: Home, About, How It Works, Experiments, Publishing, Status, Contact
- **Custom Favicon**: Red "LR" branding
- **Dark Theme**: Industrial grey/red color scheme
- **Responsive Design**: Works on all devices
- **Contact Form**: Formspree integration ready

## 📁 Project Structure

```
lmm-rodeo/
├── src/
│   └── app/
│       ├── about/
│       ├── contact/
│       ├── experiments/
│       ├── how-it-works/
│       ├── publishing/
│       ├── status/
│       ├── globals.css
│       ├── layout.tsx
│       ├── page.tsx
│       └── icon.tsx
├── public/
└── package.json
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

## 📝 License

© 2026 TM4 // Thinking Machine 4.0

## 🔗 Links

- **GitHub**: https://github.com/rokorobot/LLMRodeo
- **Live Site**: TBD
