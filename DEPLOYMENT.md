# 🚀 Deployment Guide - Vercel

This guide will help you deploy all three portfolio projects to Vercel.

## 📋 Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Account**: Your projects should be pushed to GitHub
3. **Node.js**: Installed locally for testing builds

## 🎯 Deployment Options

You have three portfolio projects to deploy:

1. **Good Look Portfolio** - 3D Island Adventure
2. **Quick Look Portfolio** - 3D Space Theme
3. **Matrix Page** - Matrix Rain Effect

Each project can be deployed as a separate Vercel project with its own URL.

---

## 📦 Method 1: Deploy via Vercel CLI (Recommended)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

This will open your browser to authenticate.

### Step 3: Deploy Each Project

Navigate to each project directory and deploy:

#### Deploy Good Look Portfolio

```bash
cd "good look portfolio"
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No (for first time)
- **Project name?** → `good-look-portfolio` (or your choice)
- **Directory?** → `./` (current directory)
- **Override settings?** → No

#### Deploy Quick Look Portfolio

```bash
cd "../quick look portfolio"
vercel
```

- **Project name?** → `quick-look-portfolio`

#### Deploy Matrix Page

```bash
cd "../matrix page"
vercel
```

- **Project name?** → `matrix-page`

### Step 4: Production Deployment

After the preview deployment, deploy to production:

```bash
vercel --prod
```

---

## 🌐 Method 2: Deploy via GitHub Integration

### Step 1: Push to GitHub

1. Create a GitHub repository (if not already done)
2. Push your code:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

### Step 2: Import to Vercel

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Configure each project:

#### For Good Look Portfolio:
- **Root Directory**: Select `good look portfolio`
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### For Quick Look Portfolio:
- **Root Directory**: Select `quick look portfolio`
- Same settings as above

#### For Matrix Page:
- **Root Directory**: Select `matrix page`
- Same settings as above

### Step 3: Add Environment Variables (if needed)

If you're using EmailJS or other services:

1. Go to Project Settings → Environment Variables
2. Add variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

### Step 4: Deploy

Click **"Deploy"** and wait for the build to complete.

---

## 🔧 Configuration Files

Each project has a `vercel.json` file configured:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures:
- ✅ Proper routing for React Router
- ✅ Correct build output directory
- ✅ SPA routing support

---

## 🧪 Testing Before Deployment

### Build Locally

Test each project build locally:

```bash
# Good Look Portfolio
cd "good look portfolio"
npm run build
npm run preview

# Quick Look Portfolio
cd "../quick look portfolio"
npm run build
npm run preview

# Matrix Page
cd "../matrix page"
npm run build
npm run preview
```

### Verify Build Output

Make sure the `dist` folder contains:
- `index.html`
- `assets/` folder with bundled files
- All necessary static files

---

## 🌍 Custom Domain Setup

### Step 1: Add Domain in Vercel

1. Go to your project settings
2. Click **"Domains"**
3. Add your custom domain

### Step 2: Configure DNS

Follow Vercel's DNS configuration instructions:
- Add A record or CNAME record
- Wait for DNS propagation (can take up to 24 hours)

---

## 📊 Deployment URLs

After deployment, you'll get:

- **Good Look Portfolio**: `https://good-look-portfolio.vercel.app`
- **Quick Look Portfolio**: `https://quick-look-portfolio.vercel.app`
- **Matrix Page**: `https://matrix-page.vercel.app`

Or with custom domains:
- `https://yourdomain.com` (Good Look Portfolio)
- `https://portfolio.yourdomain.com` (Quick Look Portfolio)
- `https://matrix.yourdomain.com` (Matrix Page)

---

## 🔄 Continuous Deployment

Once connected to GitHub, Vercel automatically:
- ✅ Deploys on every push to `main` branch
- ✅ Creates preview deployments for pull requests
- ✅ Runs automatic builds

---

## 🐛 Troubleshooting

### Build Fails

1. **Check build logs** in Vercel dashboard
2. **Verify Node.js version** - Vercel uses Node 18.x by default
3. **Check for missing dependencies** - Ensure all packages are in `package.json`
4. **Large file sizes** - 3D models might need optimization

### Routing Issues

If routes don't work:
- Verify `vercel.json` is in the project root
- Check that rewrites are configured correctly
- Ensure React Router is using `BrowserRouter`

### 3D Models Not Loading

1. **Check file paths** - Use relative paths in production
2. **Verify file sizes** - Large GLB files might timeout
3. **Check CORS** - Ensure assets are accessible

### Environment Variables

If EmailJS isn't working:
1. Add environment variables in Vercel dashboard
2. Redeploy after adding variables
3. Check variable names match your code (`VITE_` prefix for Vite)

---

## 📝 Post-Deployment Checklist

- [ ] All projects deployed successfully
- [ ] URLs are accessible
- [ ] 3D models load correctly
- [ ] Routing works (try navigating between pages)
- [ ] Contact forms work (if EmailJS configured)
- [ ] Responsive design works on mobile
- [ ] Performance is acceptable (check Lighthouse scores)

---

## 🎉 Success!

Your portfolios are now live! Share your URLs and showcase your work.

### Quick Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

**Need Help?** Check the [Vercel Support](https://vercel.com/support) or open an issue on GitHub.

