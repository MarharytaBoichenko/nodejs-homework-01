const contactsOperations = require("./contacts");
const argv = require("yargs").argv;

contactsOperations.listContacts();
contactsOperations.getContactById("1");
contactsOperations.removeContact("1");
contactsOperations.addContact(
  "Allen Raymond",
  "nulla.ante@vestibul.co.uk",
  "(992) 914-3792"
);
