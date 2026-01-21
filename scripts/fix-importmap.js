const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// aistudiocdn.com を esm.sh に置換
const importmapReplacement = `<script type="importmap">
{
  "imports": {
    "react": "https://esm.sh/react@19.0.0",
    "react-dom/client": "https://esm.sh/react-dom@19.0.0/client",
    "react-dom/": "https://esm.sh/react-dom@19.0.0/",
    "react/jsx-runtime": "https://esm.sh/react@19.0.0/jsx-runtime",
    "react/": "https://esm.sh/react@19.0.0/",
    "lucide-react": "https://esm.sh/lucide-react@0.454.0",
    "framer-motion": "https://esm.sh/framer-motion@12.0.0"
  }
}
</script>`;

// importmap部分を置換
html = html.replace(
  /<script type="importmap">[\s\S]*?<\/script>/,
  importmapReplacement
);

fs.writeFileSync(htmlPath, html);
console.log('✅ importmap を本番用に変換しました');
