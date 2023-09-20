const fs = require("fs").promises;
const path = require("path");

const contactPath = path.join(__dirname, "db", "contacts.json");
console.log(contactPath);

function listContacts() {
  const list = fs.readFile(contactPath);
  return JSON.parse(list);
}

function getContactById(contactId) {
  const contacts = listContacts();
  return contacts[contactId]; // returns undefined if not found!
}

function removeContact(contactId) {
  const contacts = listContacts();
  delete contacts[contactId];
  console.log("delete", contacts);
}

function addContact(name, email, phone) {
  const contacts = listContacts();
  let newContact = {};
  newContact["id"] = Math.floor(Math.random() * 10 + 5)
    .toString()
    .padStart("2", "0");
  newContact["name"] = name || "";
  newContact["email"] = email || "";
  newContact["phone"] = phone || "";
  console.log("newContact", newContact);
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};