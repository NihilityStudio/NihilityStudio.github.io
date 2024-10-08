{
  "version": 2,
  "builds": [
    {
      "src": "build/index.js",  // Adjust based on your build output
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "build/index.js"
    }
  ]
}
