// console.log(process);
const contacts = require("./contacts");

// const {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
// } = require("./contacts");
const list = contacts.listContacts();
console.table(list);

console.log(contacts.listContacts);
console.log(list);
console.log();
