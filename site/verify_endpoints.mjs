import http from 'http';

const urls = [
  '/',
  '/tutorials/',
  '/flutterflow-brevo-integration/',
  '/flutterflow-login-signup-ui-backend/',
  '/introduction-to-low-code-flutterflow-overview/',
  '/category/firebase/',
  '/authors/jahanzaib-waris/',
  '/about/',
  '/contact/',
  '/privacy/',
  '/robots.txt',
  '/rss.xml',
  '/sitemap-index.xml'
];

async function checkUrl(u) {
  return new Promise((resolve) => {
    http.get('http://localhost:4321' + u, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ url: u, status: res.statusCode, size: data.length });
      });
    }).on('error', (err) => resolve({ url: u, status: 'ERROR', error: err.message }));
  });
}

async function run() {
  console.log('Verifying endpoints on http://localhost:4321...');
  for (const u of urls) {
    const res = await checkUrl(u);
    console.log(`[${res.status}] ${res.url} (${res.size} bytes)`);
  }
}

run();
