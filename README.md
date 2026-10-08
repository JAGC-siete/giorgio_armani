# Jorge · jorge.humanosisu.net

Página personal de Jorge Arturo Gómez Coello, en español (`/`) e inglés (`/en/`).

Igual que `portafolio`: sitio estático servido por un Worker de Cloudflare, sin build. Lo que está en `public/` es lo que se sirve. El custom domain de `wrangler.jsonc` crea el DNS y el certificado al desplegar.

| Archivo | Para qué |
| --- | --- |
| `public/index.html` | Página en español |
| `public/en/index.html` | Página en inglés (mantenerla al día con la española) |
| `public/assets/styles.css` | Tokens de color (claro/oscuro) y estilos |
| `public/assets/main.js` | Reloj en hora de Tegucigalpa |
| `public/_headers` | Seguridad y caché |

## Comandos

```bash
npm install
npm run dev      # http://localhost:8787
npm run deploy
```
