console.log('Books Library')

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    };
};

//displaying book inside the table UI

class Display {

  
    
    add(book) {
        console.log('adding a new book');
        // let books = localStorage.getItem("books")

        let tableBody = document.getElementById('book-list');
        let UIstring = ` <tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
        <td><input id="btnConfirm" type="button" class="btn btn-danger delete" value="X"></input></td>
    </tr>`
        tableBody.innerHTML += UIstring;
    }

    //for deleting the book list
    static deleteBook(el) {
        if (el.classList.contains("delete")) {
            el.parentElement.parentElement.remove();
        }
    }

    // functions will be added here  

    //clear the form after submission of new book
    clear() {
        let libraryForm = document.getElementById('book-form');
        libraryForm.reset();

    }

    show() {
        let alertSMS = document.getElementById('alertSMS');

        alertSMS.innerHTML = ` <div class="alert alert-success " role="alert">
       
        <p class="text-align-center">The Book is added<b>---Succsessfully..!!!</b></p>
    </div>`;
        setTimeout(function () {
            alertSMS.innerHTML = ''
        }, 2000);

    }
    


}



//add event listner to form//

let libraryForm = document.getElementById('book-form');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('you have submitted library form');

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('authorName').value;
    let type;
    let nonFiction = document.getElementById('Non-fiction');
    let sciFi = document.getElementById('Sci-Fi');
    let Biography = document.getElementById('Biography');
    let Fiction = document.getElementById('Fiction');

    if (nonFiction.checked) {
        type = nonFiction.value;
    }
    else if (sciFi.checked) {
        type = sciFi.value;
    }
    else if (Biography.checked) {
        type = Biography.value;
    }
    else if (Fiction.checked) {
        type = Fiction.value;
    }


    let book = new Book(name, author, type);


    name.value = "";
    author.value = "";
    type.value = "";

    console.log(book);

    let display = new Display();
    display.add(book);
    display.clear();
    display.show();
    e.preventDefault();
    // display.addBooks(book);
}

//Event to Delete book

    document.getElementById('book-list').addEventListener('click', (e) => {
        Display.deleteBook(e.target);
    })


    // store the books to local storage
class store{
    
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;
    };

    static addBook(book) {
        const books = store.getBooks();
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
        
    };



    }





