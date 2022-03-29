import Date from './modules/dateTime.js';
import displayPage from './modules/pageNav.js';
import CreateBook from './modules/createBook.js';

const library = new CreateBook();

library.addandRemoveBook();
Date();
displayPage();
