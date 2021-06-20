const body = document.querySelector('.body');
const newBtn = document.querySelector('.newBtn');
const form = document.querySelector('.form');

const addBtn = document.querySelector('.add');
const cancelBtn = document.querySelector('.cancel');

const title = document.querySelector('.title');
const main = document.querySelector('.main');

//Select div of Card
const card = document.querySelector('.card');

newBtn.addEventListener('click', newBook);
cancelBtn.addEventListener('click', closeForm);
addBtn.addEventListener('click', validateForm);
card.addEventListener('click', removeBook);

function newBook() {
    title.style.opacity = '0.5';
    main.style.opacity = '0.5';
    
    title.style.filter = 'blur(2px)';
    main.style.filter = 'blur(2px)';

    form.style.display = 'block';
}

function closeForm() {
    title.style.opacity = '1';
    main.style.opacity = '1';
    
    title.style.filter = 'blur(0px)';
    main.style.filter = 'blur(0px)';

    form.style.display = 'none';

}

function validateForm() {

    //Clear error from previous form validation
    // document.getElementById('spanTitle').innerText = '';
    // document.getElementById('spanAuthor').innerText = '';
    // document.getElementById('spanLang').innerText = '';
    // document.getElementById('spanPage').innerText = '';

    //Fetch values from Form
    const bookTitle = document.getElementById('bookTitle').value;
    const bookAuthor = document.getElementById('bookAuthor').value;
    const bookLang = document.getElementById('bookLang').value;
    const bookPage = document.getElementById('bookPage').value;

    if(bookTitle == '') {
        document.getElementById('spanTitle').innerText = '*Title is required';
    }
    
    if(bookAuthor == '') {
        document.getElementById('spanAuthor').innerText = '*Author is required';
    }
    
    if(bookLang == '') {
        document.getElementById('spanLang').innerText = '*Language is required';
    }
    
    if(bookPage == '') {
        document.getElementById('spanPage').innerText = '*Pages are required';
    }

    if(bookTitle != '' && bookAuthor != '' && bookLang != '' && bookPage != '') {
        document.getElementById('spanTitle').innerText = '';
        document.getElementById('spanAuthor').innerText = '';
        document.getElementById('spanLang').innerText = '';
        document.getElementById('spanPage').innerText = '';

        addBook(bookTitle, bookAuthor, bookLang, bookPage);
    }   
}

function addBook(bookTitle, bookAuthor, bookLang, bookPage) {
    //id++;
    //Fetch values from Form
    // const bookTitle = document.getElementById('bookTitle').value;
    // const bookAuthor = document.getElementById('bookAuthor').value;
    // const bookLang = document.getElementById('bookLang').value;
    // const bookPage = document.getElementById('bookPage').value;

    //Create new div for book
    const book = document.createElement('div');
    book.classList.add('book', 'unchecked'); //unchecked for check button
    book.setAttribute('transition', 'all 0.7s ease');

    const cross = document.createElement('div');
    cross.classList.add('crossmark');
    //cross.setAttribute('id', id);
    //console.log(cross);
    cross.innerHTML = '<i class="fa fa-times"></i>';
    book.appendChild(cross);

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('cardTitle');
    cardTitle.innerText = bookTitle.toUpperCase();
    book.appendChild(cardTitle);

    const cardAuthor = document.createElement('div');
    cardAuthor.classList.add('cardAuthor');
    cardAuthor.innerText = bookAuthor;
    book.appendChild(cardAuthor);

    const cardLang = document.createElement('div');
    cardLang.classList.add('cardLang');
    cardLang.innerText = bookLang;
    book.appendChild(cardLang);

    const cardPage = document.createElement('div');
    cardPage.classList.add('cardPage');
    cardPage.innerText = bookPage;
    book.appendChild(cardPage);

    const cardRead = document.createElement('div');
    cardRead.classList.add('cardRead');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    cardRead.appendChild(checkbox);
    book.appendChild(cardRead);

    card.appendChild(book);

    //Styling the card
    card.style.display = 'flex';

    title.style.opacity = '1';
    main.style.opacity = '1';
    
    title.style.filter = 'blur(0px)';
    main.style.filter = 'blur(0px)';   

    form.style.display = 'none';
    document.getElementById('bookForm').reset();
}

function removeBook(e) {

    const item = e.target;
    
    if(item.classList.contains('fa')) {
        item.parentElement.parentElement.remove();
    } 
    else if(item.classList.contains('checkbox')) {
        item.parentElement.parentElement.classList.toggle('checked');
    } 
}