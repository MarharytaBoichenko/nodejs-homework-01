const listContacts = require("./listContacts");
const { v4 } = require("uuid");

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  newContact = { id: v4(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
};
module.exports = addContact;
