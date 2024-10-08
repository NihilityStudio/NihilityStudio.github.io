const handle = async ({ event, resolve }) => {
  const response = await resolve(event, {
    ssr: false
  });
  return response;
};

export { handle };
//# sourceMappingURL=hooks-88b6e47b-347f0259.js.map
