Pasul 1
Inițializează npm în proiect
Crează fișier în rădăcina proiectului
Adaugă pachetul nodemon ca o dependenţă de dezvoltare (devDependencies)
În fișierul package.json adaugă "scripts" pentru a porni index.js
Scriptul start pornește index.js folosind node
Scriptul start:dev pornește index.js folosind nodemon
Pasul 2
Crează folderul db în rădăcina proiectului. Pentru a stoca datele de contact, descarcă și folosește fișierul contacts.json plasându-l în folderul db.

La rădăcina proiectului, crează fișierul contacts.js.

Importă modulele fs și path pentru a lucra cu sistemul de fișiere
Declară variabila contactsPath și oferă-i ca valoare calea către fișierul contacts.json. Folosește metodele modulului pentru a construi calea path.
Adaugă funcții pentru a lucra cu o colecție de contacte. În funcții, folosește modulul fs și metodele readFile() și writeFile()
Exportă funcțiile create folosind module.exports
contacts.js
/\*

- Decomentează variabila și oferă-i o valoare
- const contactsPath = ;
  \*/

// TODO: documentează fiecare funcție
function listContacts() {
// ...codul tău
}

function getContactById(contactId) {
// ...codul tău
}

function removeContact(contactId) {
// ...codul tău
}

function addContact(name, email, phone) {
// ...codul tău
}
Pasul 3
Importă modulul contacts.js în fișierul index.js și testează funcțiile pentru lucrul cu datele de contact.

Pasul 4
În fișierul index.js se importă pachetul yargs pentru a parsa argumentele liniei de comandă. Folosește funcția invokeAction() care primește tipul acțiunii și argumentele necesare. Funcția apelează metoda necesară din fișierul contacts.js și îi transmite argumentele.

index.js
const argv = require("yargs").argv;

// TODO: De refactorizat
function invokeAction({ action, id, name, email, phone }) {
switch (action) {
case "list":
// ...
break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");

}
}

invokeAction(argv);
De asemenea, poți utiliza modulul commander pentru a parsa argumentele liniei de comandă. Aceasta este o alternativă mai populară modulului yargs.

const { Command } = require("commander");
const program = new Command();
program
.option("-a, --action <type>", "choose action")
.option("-i, --id <type>", "user id")
.option("-n, --name <type>", "user name")
.option("-e, --email <type>", "user email")
.option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: De refactorizat
function invokeAction({ action, id, name, email, phone }) {
switch (action) {
case "list":
// ...
break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");

}
}

invokeAction(argv);

Pasul 5
Rulează comenzile în terminal și fă o captură de ecran separată pentru fiecare rezultat al comenzilor:

# Obținerea și afișarea întregii liste de contacte sub forma unui tabel (console.table)

node index.js --action list

https://monosnap.com/file/ZaKn0F6GdliMkNUmBUmmQmfWGkUStU

# Obținerea unei date de contact după id

node index.js --action get --id 05olLMgyVQdWRwgKfg5J6

https://monosnap.com/file/PJZMjKb8MZHe1qHNMyhhEvdc82brId

# Adăugarea unui contact

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/eON05FZUhcibNOPrKf8JGtbUVGnODY

# Ștergerea unui contact

node index.js --action remove --id qdggE76Jtbfd9eWJHrssH

https://monosnap.com/file/oMq1F5dHAIp9W4pLtssD48q6Z0naRu

Pasul 6 - Predarea temei
Capturile de ecran pot fi încărcate în orice serviciu gratuit de stocare a imaginilor în cloud (Exemplu: monosnap, imgbb.com) și link-urile corespunzătoare vor fi adăugate în fișierul README.md. Crează acest fișier la rădăcina proiectului.

Acceptance Criteria
Este creat un repository cu tema — CLI application
Codul corespunde cerințelor tehnice
La execuția codului nu apar erori neprelucrate
Numele variabilelor, proprietăților și metodelor încep cu o literă mică și sunt scrise cu CamelCase. Sunt folosite substantive în limba engleză
Numele unei funcții sau metode conține un verb
Nu există secțiuni de cod comentate în cod
Proiectul funcționează corect în versiunea actuală LTS Node
