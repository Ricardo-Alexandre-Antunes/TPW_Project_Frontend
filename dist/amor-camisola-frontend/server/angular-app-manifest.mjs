
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "redirectTo": "/products",
    "route": "/"
  },
  {
    "renderMode": 1,
    "route": "/products"
  },
  {
    "renderMode": 1,
    "route": "/product/*"
  },
  {
    "renderMode": 1,
    "route": "/users"
  },
  {
    "renderMode": 1,
    "route": "/profile/*"
  },
  {
    "renderMode": 1,
    "route": "/favorites"
  },
  {
    "renderMode": 1,
    "route": "/offers"
  },
  {
    "renderMode": 1,
    "route": "/authentication"
  },
  {
    "renderMode": 1,
    "route": "/sell"
  },
  {
    "renderMode": 1,
    "route": "/moderator"
  },
  {
    "renderMode": 1,
    "route": "/account"
  },
  {
    "renderMode": 1,
    "route": "/wallet"
  }
],
  assets: {
    'index.csr.html': {size: 1104, hash: '641a909ea5c8985f6c2f1cee8b1c65ea1f1abfa40abeda94126d6b50975321d1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1617, hash: 'eeed5ab59273d3920dfbbeb6dfaeeebf884f1485a89ba1de94feb2d774b0fc91', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
