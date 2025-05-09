# Step-by-Step Deployment Guide

## Preparation

1. **Clean the project**:
   ```
   Remove-Item -Recurse -Force node_modules (if exists)
   Remove-Item -Recurse -Force .next (if exists)
   Remove-Item -Recurse -Force out (if exists)
   ```

2. **Fix project structure**:
   ```
   # Remove problematic API routes
   Remove-Item -Recurse -Force app\api (if exists)
   ```

3. **Update configuration files**:
   - Ensure `next.config.js` is configured for static export
   - Use a simple `vercel.json` configuration

## GitHub Deployment (Recommended)

1. **Create a GitHub repository**
2. **Push your code**:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

3. **Deploy via Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Configure as follows:
     - Framework Preset: Next.js
     - Root Directory: `./`
     - Build Command: `npm run build`
   - Add Environment Variables:
     - `MONGODB_URI`: Your MongoDB connection string
     - `NEXTAUTH_SECRET`: A secure random string

4. **Deploy**

## Direct Vercel Deployment

If you prefer to deploy directly without GitHub:

1. **Install Vercel CLI** (if not already installed):
   ```
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```
   vercel login
   ```

3. **Deploy**:
   ```
   vercel --prod
   ```

## After Deployment

1. **Verify your site** is working correctly
2. **Add a custom domain** (optional)
3. **Re-add API routes** one by one, testing after each addition

## Troubleshooting

If you encounter issues:

1. Check the Vercel build logs for specific errors
2. Try deploying without API routes or server components first
3. Gradually add complexity back to your project 