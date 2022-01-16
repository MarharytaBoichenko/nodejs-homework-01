const listContacts = require("./listContacts");

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === contactId);
  if (idx === -1) {
    return null;
  }
  const newContacts = contacts.filter((el, index) => index !== idx);
  await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
  return contacts[idx];
};
module.exports = removeContact;
