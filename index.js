const contactsOperations = require("./controllers/contacts");

// contactsOperations.listContacts();
// contactsOperations.getContactById("1");
// contactsOperations.removeContact("1");
// contactsOperations.addContact(
//   "Allen Raymond",
//   "nulla.ante@vestibul.co.uk",
//   "(992) 914-3792"
// );

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
console.log(argv);

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactList = await contactsOperations.listContacts();
      console.log(contactList);
      break;

    case "get":
      const contactById = await contactsOperations.getContactById(id);
      console.log(contactById);
      break;

    case "add":
      const newContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.log(newContact);
      break;

    case "remove":
      const removedContact = await contactsOperations.removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
