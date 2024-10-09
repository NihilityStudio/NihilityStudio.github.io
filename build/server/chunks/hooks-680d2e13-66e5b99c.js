const handle = async ({ event, resolve }) => {
  const response = await resolve(event, {
    ssr: false,
    headers: {
      "Cache-Control": "public, max-age=31536000"
    }
  });
  return response;
};

export { handle };
//# sourceMappingURL=hooks-680d2e13-66e5b99c.js.map
