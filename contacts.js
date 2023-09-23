const fs = require("fs").promises;
const path = require("path");

const contactPath = path.join(__dirname, "db", "contacts.json");
// console.log(contactPath);

const listContacts = async () => {
  const list = await fs.readFile(contactPath);
  return JSON.parse(list);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.find((item) => item.id === contactId);
  return contact || null;
};

const removeContact = (contactId) => {
  const contacts = listContacts();
  const idx = contacts.findIndex((item) => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  const [contact] = contacts.splice(idx, 1);
  fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
  return contact;
};

const addContact = async (list) => {
  const contacts = await listContacts();
  const newContact = { id: nanoid(), ...list };
  contacts.push(newContact);
  await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
