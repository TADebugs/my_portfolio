# 🔧 Fix Vercel 404 Error

## The Problem
You're getting a `404: NOT_FOUND` error because Vercel doesn't know where to find your project files.

## ✅ Solution: Configure Root Directory in Vercel

### Step 1: Go to Your Vercel Project Settings

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your project (the one showing 404)
3. Go to **Settings** tab
4. Scroll down to **General** → **Root Directory**

### Step 2: Set the Correct Root Directory

Since your project is in a subfolder, you need to tell Vercel where to look:

**For "Good Look Portfolio":**
- Set **Root Directory** to: `good look portfolio`
- Click **Save**

**For "Quick Look Portfolio":**
- Set **Root Directory** to: `quick look portfolio`
- Click **Save**

**For "Matrix Page":**
- Set **Root Directory** to: `matrix page`
- Click **Save**

### Step 3: Verify Build Settings

In the same **Settings** → **General** section, verify:

- **Framework Preset**: `Vite` (or `Other`)
- **Build Command**: `npm run build` (should auto-detect)
- **Output Directory**: `dist` (should auto-detect)
- **Install Command**: `npm install` (should auto-detect)

### Step 4: Redeploy

After saving the Root Directory:

1. Go to **Deployments** tab
2. Click the **⋯** (three dots) on the latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger auto-deployment

---

## 🎯 Alternative: Deploy from Subfolder Using Vercel CLI

If you prefer using the CLI and want to deploy from the subfolder directly:

### Option A: Deploy from Project Directory

```bash
cd "good look portfolio"
vercel --prod
```

This will automatically detect the correct root directory.

### Option B: Specify Root Directory in CLI

```bash
vercel --prod --cwd "good look portfolio"
```

---

## 🔍 Verify Configuration

After setting the Root Directory, your Vercel project should have:

```
Root Directory: good look portfolio
Build Command: npm run build
Output Directory: dist
Framework: Vite
```

---

## 📝 Quick Checklist

- [ ] Root Directory is set to the correct subfolder (`good look portfolio`)
- [ ] Build Command is `npm run build`
- [ ] Output Directory is `dist`
- [ ] Framework is set to `Vite`
- [ ] `vercel.json` exists in the project root
- [ ] Redeployed after changing settings

---

## 🐛 Still Getting 404?

### Check These:

1. **Verify `vercel.json` exists** in the project folder:
   ```bash
   ls "good look portfolio/vercel.json"
   ```

2. **Check build output**:
   - Go to Deployment → Build Logs
   - Verify `dist` folder is created
   - Check if `index.html` exists in dist

3. **Test build locally**:
   ```bash
   cd "good look portfolio"
   npm run build
   ls dist/  # Should see index.html and assets folder
   ```

4. **Check file paths in index.html**:
   - Built files should use relative paths (not absolute)
   - Vite should handle this automatically

---

## ✅ Expected Result

After fixing, you should see:
- ✅ Site loads at `https://your-project.vercel.app`
- ✅ Home page displays correctly
- ✅ Navigation works (`/about`, `/projects`, `/contact`)
- ✅ No 404 errors

---

**Need More Help?** Check the build logs in Vercel dashboard for specific error messages.

