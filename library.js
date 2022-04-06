// console.log("This is index")
showBooks()


// formValidation();







//If user adds a book at it to the local storsage.


let addBook = document.getElementById("addBook");


addBook.addEventListener("click", function (e) {
    let bookTitle = document.getElementById("bookTitle");
    let bookAuthor = document.getElementById("bookAuthor");
    let alertSMS = document.getElementById('alertSMS');

    let type;


    //validate
    if (!bookTitle.value) {
        alert('Fill the Input Title');
        bookTitle.focus();
        return false;
    };
  
    let SelfHelp = document.getElementById("SelfHelp");
    let Education = document.getElementById("Education");
    let Fiction = document.getElementById("Fiction");
    let NonFiction = document.getElementById("NonFiction");
    let Religious = document.getElementById("Religious");
    let History = document.getElementById("History");

    if (SelfHelp.checked) {
        type = SelfHelp;
    }

    else if (Education.checked) {
        type = Education;
    }
    else if (Fiction.checked) {
        type = Fiction;
    }
    else if (NonFiction.checked) {
        type = NonFiction;
    }
    else if (Religious.checked) {
        type = Religious;
    }
    else if (History.checked) {
        type = History;
    };


    let books = localStorage.getItem("books");
    if (books == null) {
        booksObj = [];
    }
    else {
        booksObj = JSON.parse(books);
    }

    let myObj = {
        Title: bookTitle.value,
        Author: bookAuthor.value,
        Category: type.value,
    }
    booksObj.push(myObj);

    



    localStorage.setItem('books', JSON.stringify(booksObj));
    bookTitle.value = "";
    bookAuthor.value = "";
    type.value = "";
    // console.log(booksObj);




    // e.preventDefault();







});

//show book function

function showBooks() {
    let books = localStorage.getItem("books");

    if (books == null) {

        booksObj = [];
    } else {
        booksObj = JSON.parse(books);
    }
    let html = "";

    booksObj.forEach(function (Element, index) {
        html +=
            `<tr class=" bookShelf table table-dark table-striped">
            <th scope="col">${index + 1}</th>
            <td>${Element.Title}</td>
            <td>${Element.Author}</td>
            <td>${Element.Category}</td>
            <td><button id="${index} "onClick="deleteBooks(this.id)" id = "closeBtn" type="button" class="btn-close" aria-label="Close"></button></td>
        </tr>`
    });

    let booksElm = document.getElementById("tableBody");

    if (booksObj.lenght !== 0) {
        booksElm.innerHTML = html;

    }


};

// Alert function


function show() {
    let alertSMS = document.getElementById('alertSMS');

    alertSMS.innerHTML = ` <div class="alert alert-success " role="alert">
   
    <p class="text-align-center">The Book is added<b>---Succsessfully..!!!</b></p>
</div>`;
    setTimeout(function () {
        alertSMS.innerHTML = ''
    }, 2000);

};




// Function To delete books

function deleteBooks(index) {

    let books = localStorage.getItem("books");
    if (books == null) {
        booksObj = [];

    } else {
        booksObj = JSON.parse(books);
    }

    booksObj.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(booksObj));
    showBooks();

}



// function for search a book

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();

    // console.log("input event fired", inputVal)
    let bookShelf = document.getElementsByClassName('bookShelf')

    Array.from(bookShelf).forEach(function (element) {
        let bookName = element.getElementsByTagName("td")[0].innerText;

        if (bookName.includes(inputVal)) {
            element.style.display = "";
        } else {
            element.style.display = "none";

        }
    })
});




