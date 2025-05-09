# Deployment Guide for Vercel and Netlify

## Configuration Changes Made

1. Removed duplicate `next.config.ts` file to prevent configuration conflicts
2. Updated `vercel.json` for optimal static deployment
3. Updated `netlify.toml` for optimal static deployment
4. Modified ESLint configuration to be less strict during builds
5. Updated build scripts in package.json for both platforms

## Required Environment Variables

Make sure to set these in your deployment platform's dashboard:

- `MONGODB_URI`: Your MongoDB connection string
- `NEXTAUTH_SECRET`: A secret string for NextAuth.js
- `NEXTAUTH_URL`: Your production URL (e.g., https://your-app.vercel.app)

## Vercel Deployment

### Via Vercel CLI

1. Make sure you're logged in to Vercel CLI:
   ```
   npx vercel login
   ```

2. Deploy to preview:
   ```
   npm run deploy
   ```

3. Deploy to production:
   ```
   npm run deploy:prod
   ```

### Via Vercel Dashboard

1. Connect your GitHub repository to Vercel
2. Configure your project settings:
   - Framework Preset: Next.js
   - Build Command: `npm run static-build`
   - Output Directory: `out`
3. Add environment variables in the Vercel dashboard
4. Deploy

## Netlify Deployment

### Via Netlify CLI

1. Make sure you're logged in to Netlify CLI:
   ```
   npx netlify login
   ```

2. Deploy to preview:
   ```
   npx netlify deploy
   ```

3. Deploy to production:
   ```
   npx netlify deploy --prod
   ```

### Via Netlify Dashboard

1. Connect your GitHub repository to Netlify
2. Configure your build settings:
   - Build Command: `npm run netlify-build`
   - Publish Directory: `out`
3. Add environment variables in the Netlify dashboard
4. Deploy

## Troubleshooting

### For Both Platforms

1. Check deployment logs for specific error messages
2. Ensure all environment variables are correctly set
3. Run `npm run build` locally to catch any issues before deploying

### Vercel-Specific Issues

1. If you encounter routing issues, check your `vercel.json` configuration
2. For API routes, ensure they're properly set up in `/app/api/` directory

### Netlify-Specific Issues

1. If you encounter routing issues, check your `netlify.toml` redirects
2. Make sure the Netlify Next.js plugin is working correctly

## Local Testing

Run these commands to test your build locally before deploying:

```bash
# Clean previous builds
rm -rf .next out

# Build the project
npm run build

# Serve the static output
npx serve out
```

This will help ensure your build works correctly before deploying to either platform. 