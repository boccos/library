const myLibrary = [];
document.addEventListener('DOMContentLoaded', () => createCard(myLibrary));


class Book {
  constructor(title, author, pages, year, type, isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.year = year
  this.type = type
  this.isRead = isRead
  this.id = crypto.randomUUID()
  }
}
const addBook = document.getElementById("openButton")
const dialog = document.getElementById("dialog")
const form = document.getElementById("newBookForm")

addBook.addEventListener("click", () => dialog.show())
form.addEventListener("submit", (submission) => {
    submission.preventDefault()
    const title = form.title.value
    const author = form.author.value
    const pages = form.pages.value
    const year = form.year.value
    const type = form.type.value
    const isRead = form.isRead.checked

    const newBook = new Book(title, author, pages, year, type, isRead)

    addBookToLibrary(newBook)

    form.reset();
    dialog.close()
})
function addBookToLibrary(newBook) {
  myLibrary.push(newBook)
  const container = document.getElementById("container")
  container.appendChild(getInfo(newBook))
}

/*function createCard(catalogue){
  const container = document.getElementById("container")
  container.innerHTML = ""
  catalogue.forEach(book => {
    container.appendChild(getInfo(book))
  })
}
*/
function getInfo(book){
  const card = document.createElement("div")
  card.setAttribute("class", "book_card")

  const title = document.createElement("div")
  title.setAttribute("class", "title")
  title.textContent = `Title: ${book.title}`
  card.appendChild(title)

  const author = document.createElement("div")
  author.setAttribute("class", "author")
  author.textContent = `Author: ${book.author}`
  card.appendChild(author)
  
  const pages = document.createElement("div")
  pages.setAttribute("class", "pages")
  pages.textContent = `Pages: ${book.pages}`
  card.appendChild(pages)

  const year = document.createElement("div")
  year.setAttribute("class", "year")
  year.textContent = `Year: ${book.year}`
  card.appendChild(year)

  const type = document.createElement("div")
  type.setAttribute("class", "type")
  type.textContent = `Type: ${book.type}`
  card.appendChild(type)


  const checkboxLabel = document.createElement('label');
  checkboxLabel.textContent = "Is Read: ";
  
  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.checked = book.isRead;

  checkbox.addEventListener('change', () => 
  {
    book.isRead = checkbox.checked;
  });

  checkboxLabel.appendChild(checkbox);
  card.appendChild(checkboxLabel);

  const book_id = document.createElement("div")
  book_id.setAttribute("class", "book_id")
  book_id.textContent = `ID: ${book.id}`
  card.appendChild(book_id)

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";

  deleteBtn.addEventListener("click", () => {
    const index = myLibrary.findIndex(b => b.id === book.id);
    if (index !== -1) {
        myLibrary.splice(index, 1);
    }

    card.remove();
  });


  card.appendChild(deleteBtn);


  return card;
}

addBookToLibrary(new Book('Pride and Prejudice', 'Jane Austen', 448, 1813, 'HardCopy', false));
addBookToLibrary(new Book('Great Expectations', 'Charles Dickens', 544, 1861, 'HardCopy', false));
addBookToLibrary(new Book('Jane Eyre', 'Charlotte Brontë', 576, 1847, 'HardCopy', false));
addBookToLibrary(new Book('Wuthering Heights', 'Emily Brontë', 416, 1847, 'HardCopy', false));