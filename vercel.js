{
  "version": 2,
  "builds": [
    {
      "src": "win32.run/build/index.js",  // Adjust based on your build output
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "win32.run/build/index.js"
    }
  ]
}
