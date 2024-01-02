const title=document.getElementById('title');
const author=document.getElementById('author');
const numOfPages=document.getElementById('num-of-pages');
const submitBtn=document.getElementById('submit');

const table = document.querySelector("table");
const tableBody = document.createElement("tbody");
table.append(tableBody);

const deleteAllBtn = document.getElementById("delete-all");
// console.log(deleteAllBtn)

const book=document.querySelector('.book');
let books=[];
let deleteBookNumber = 1;

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    let theBook=new Book(title.value,author.value,numOfPages.value);
    // console.log(theBook);
    // console.log(bookArray);

    books.push(theBook);
    displayBook(books[books.length - 1]);

    title.value="";
    author.value="";
    numOfPages.value="";
})

// creating a book constructor
function Book(bTitle,bAuthor,bPages){
    this.bookTitle=bTitle;
    this.bookAuthor=bAuthor;
    this.bookPages=bPages;
}


console.log(books);
// displayBook(books);

// display each book
function displayBook(book){
    // console.log("i will display each book......")
    // console.log(book)
        
    let tableRow=document.createElement('tr');
    let tableDataOne=document.createElement('td');
    let tableDataTwo=document.createElement('td');
    let tableDataThree=document.createElement('td');
    let tableDataFour=document.createElement('td');
    
    let deleteBtn=document.createElement('button');
      
    tableDataOne.innerText=book.bookTitle;
    tableDataTwo.innerText=book.bookAuthor;
    tableDataThree.innerText=book.bookPages; 
    
    deleteBtn.setAttribute('value',`${deleteBookNumber++}`)
    deleteBtn.innerText='delete book';
    tableDataFour.appendChild(deleteBtn)

    tableRow.appendChild(tableDataOne);
    tableRow.appendChild(tableDataTwo);
    tableRow.appendChild(tableDataThree);
    tableRow.appendChild(tableDataFour);

    tableBody.appendChild(tableRow);
    listenClickEvent();
    
    return
}

// to listen click event of each book delete button
function listenClickEvent(){
    if(books.length === 0 || !books) throw Error("books is empty......")
    let deleteButtons=tableBody.querySelectorAll('button');
    let deleteBookNumber
    deleteButtons.forEach(button => {
        deleteBookNumber = button.value;
        button.addEventListener('click',(event)=>{
            deleteBook(event,deleteBookNumber)
        });

    })
 
}

// deleting the particularly selected book
function deleteBook(e,deleteBookNumber){
    console.log(e.currentTarget.closest('tr'));
    let newBooks
    let deletedBook = e.currentTarget.closest('tr');
    deletedBook.remove();
    
    if(deleteBookNumber === (books.length)) {
        books.pop();
    }else if(deleteBookNumber === 1){
        newBooks = books.slice(1);
        books=newBooks
        console.log(books)

    }else{
        newBooks=[...books.slice(0,deleteBookNumber - 1), ...books.slice(deleteBookNumber) ]
        books=newBooks
        console.log(newBooks)
        console.log(books)

    }
    console.log(books)
}

// deleting all the books
deleteAllBtn.addEventListener('click',() => {
    tableBody.remove();
    books.length = 0;//removes all book objects in array || books=[]
})
