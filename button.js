const addBook = document.getElementById("openButton")
const dialog = document.querySelector("dialog")
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