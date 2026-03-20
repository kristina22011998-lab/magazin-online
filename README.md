-Cerințe

Asigură-te că ai instalate:

Node.js (recomandat versiunea LTS)

npm sau yarn

Verifică:

node -v
npm -v

-Instalare

Clonează proiectul sau descarcă arhiva, apoi rulează:

npm install

sau, dacă folosești yarn:

yarn

-Rulare în modul development

Pentru a porni aplicația local:

npm run dev

sau:

yarn dev

-Aplicația va fi disponibilă la:

http://localhost:5173

 Build pentru producție

-Pentru a genera versiunea optimizată:

npm run build

sau:

yarn build

Fișierele vor fi generate în folderul:

dist/


Pentru a testa build-ul local:

npm run preview
🧹 Linting

Pentru verificarea codului:

npm run lint
⚙️ Tehnologii folosite

React

Vite

ESLint

-Note

HMR (Hot Module Replacement) este activ implicit.

Poți alege între pluginurile React bazate pe SWC sau Oxc.

Pentru proiecte mai complexe, este recomandată integrarea TypeScript.

-Autor

Milanovic Kristina