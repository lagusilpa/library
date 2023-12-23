const title=document.getElementById('title');
const author=document.getElementById('author');
const numOfPages=document.getElementById('num-of-pages');
const submitBtn=document.getElementById('submit');

const tableBody = document.querySelector("tbody");
const fragment = document.createDocumentFragment();

const book=document.querySelector('.book');
let books=[];
let bTitle;
let bAuthor;
let bPages;

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    bTitle=title.value;
    bAuthor=author.value;
    bPages=numOfPages.value;

    let theBook=new Book(bTitle,bAuthor,bPages);
    // console.log(theBook);
    // console.log(bookArray);

    books.push(theBook);

    displayBook(books[books.length - 1]);

    title.value="";
    author.value="";
    numOfPages.value="";
})


function Book(bTitle,bAuthor,bPages){
    this.bookTitle=bTitle;
    this.bookAuthor=bAuthor;
    this.bookPages=bPages;
}


console.log(books);
// displayBook(books);


function displayBook(book){
    console.log("i will display each book......")
    console.log(book)
        
    let tableRow=document.createElement('tr');
    let tableDataOne=document.createElement('td');
    let tableDataTwo=document.createElement('td');
    let tableDataThree=document.createElement('td');
    let tableDataFour=document.createElement('td');
    
    let deleteBtn=document.createElement('button');
      
    tableDataOne.innerText=book.bookTitle;
    tableDataTwo.innerText=book.bookAuthor;
    tableDataThree.innerText=book.bookPages; 
    
    deleteBtn.innerText='delete';
    tableDataFour.appendChild(deleteBtn)

    tableRow.appendChild(tableDataOne);
    tableRow.appendChild(tableDataTwo);
    tableRow.appendChild(tableDataThree);
    tableRow.appendChild(tableDataFour);

    // fragment.appendChild(tableRow)
    // console.log(fragment)

    tableBody.appendChild(tableRow);
}





