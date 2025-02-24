import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number = 5) => {
  const contacts = await readContacts();
    for (let i = 0; i < number; i++) {
        contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
    console.log(`Added ${number} new contacts.`);
};

generateContacts(5);
