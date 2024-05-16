/**
 * pathbase plugin for vite;
 * @param {string} pathbase pathbase
 * @returns {import('vite').Plugin}
 */
export default function pathbasePlugin(pathbase) {
  function pathbaseMiddleware(req, res, next) {
    if (req.url.startsWith(pathbase)) {
      req.url = req.url.substring(pathbase.length);
    }
    next();
  }
  return {
    name: 'pathbase',
    enforce: 'pre',
    apply: 'serve',
    configureServer: server => {
      server.middlewares.use(pathbaseMiddleware);
    }
  };
}
