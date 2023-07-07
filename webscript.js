document.getElementById("login-form").addEventListener("submit", login);
document.getElementById("signup-form").addEventListener("submit", signup);

function login(event) {
  event.preventDefault();
  var username = document.getElementById("login-username").value;
  var password = document.getElementById("login-password").value;
  // Perform authentication logic here (e.g., sending an AJAX request to the server)
  console.log("Logging in with username: " + username + " and password: " + password);
}

function signup(event) {
  event.preventDefault();
  var username = document.getElementById("signup-username").value;
  var password = document.getElementById("signup-password").value;
  // Perform signup logic here (e.g., sending an AJAX request to the server)
  console.log("Signing up with username: " + username + " and password: " + password);
}

const books = [
  { bookName: 'Book 1', authorName: 'Author 1', genre: 'Fantasy', year: 2020 },
  { bookName: 'Book 2', authorName: 'Author 2', genre: 'Mystery', year: 2018 },
  { bookName: 'Book 3', authorName: 'Author 3', genre: 'Science Fiction', year: 2021 },
  // Add more books as needed
];

const searchInput = document.getElementById('search-input');
const suggestionsContainer = document.getElementById('suggestions-container');
const suggestionsList = document.getElementById('suggestions-list');

searchInput.addEventListener('input', handleInput);

function handleInput() {
  const searchText = searchInput.value.toLowerCase();
  const filteredBooks = books.filter((book) => {
    const bookName = book.bookName.toLowerCase();
    const authorName = book.authorName.toLowerCase();
    const genre = book.genre.toLowerCase();
    const year = book.year.toString();
    return (
      bookName.includes(searchText) ||
      authorName.includes(searchText) ||
      genre.includes(searchText) ||
      year.includes(searchText)
    );
  });

  showSuggestions(filteredBooks);
}

function showSuggestions(filteredBooks) {
  suggestionsList.innerHTML = '';

  if (filteredBooks.length === 0) {
    suggestionsContainer.style.display = 'none';
    return;
  }

  filteredBooks.forEach((book) => {
    const suggestionItem = document.createElement('li');
    suggestionItem.classList.add('suggestion-item');
    suggestionItem.textContent = `${book.bookName} - ${book.authorName}`;
    suggestionItem.addEventListener('click', () => {
      searchInput.value = `${book.bookName} - ${book.authorName}`;
      suggestionsContainer.style.display = 'none';
    });
    suggestionsList.appendChild(suggestionItem);
  });

  suggestionsContainer.style.display = 'block';
}

const books = [
  { id: 1, title: 'Book 1', author: 'Author 1', subject: 'Fantasy', publishDate: '2020-01-01', availability: true, copies: 5 },
  { id: 2, title: 'Book 2', author: 'Author 2', subject: 'Mystery', publishDate: '2018-06-15', availability: true, copies: 3 },
  { id: 3, title: 'Book 3', author: 'Author 3', subject: 'Science Fiction', publishDate: '2021-09-20', availability: false, copies: 0 },
  // Add more books as needed
];

const searchInput = document.getElementById('search-input');
const suggestionsContainer = document.getElementById('suggestions-container');
const suggestionsList = document.getElementById('suggestions-list');
const filterSelect = document.getElementById('filter');
const sortSelect = document.getElementById('sort');
const bookCountElement = document.getElementById('book-count');
const booksList = document.getElementById('books');
const cartList = document.getElementById('cart');
const checkoutButton = document.getElementById('checkout-button');

searchInput.addEventListener('input', handleInput);
filterSelect.addEventListener('change', handleFilter);
sortSelect.addEventListener('change', handleSort);
checkoutButton.addEventListener('click', handleCheckout);

let filteredBooks = books;
let cartItems = [];

function handleInput() {
  const searchText = searchInput.value.toLowerCase();
  filteredBooks = books.filter((book) => {
    const bookTitle = book.title.toLowerCase();
    const bookAuthor = book.author.toLowerCase();
    const bookSubject = book.subject.toLowerCase();
    const bookPublishDate = book.publishDate;
    return (
      bookTitle.includes(searchText) ||
      bookAuthor.includes(searchText) ||
      bookSubject.includes(searchText) ||
      bookPublishDate.includes(searchText)
    );
  });

  showSuggestions(filteredBooks);
  renderBooks();
}

function showSuggestions(filteredBooks) {
  suggestionsList.innerHTML = '';

  if (filteredBooks.length === 0) {
    suggestionsContainer.style.display = 'none';
    return;
  }

  filteredBooks.forEach((book) => {
    const suggestionItem = document.createElement('li');
    suggestionItem.classList.add('suggestion-item');
    suggestionItem.textContent = `${book.title} - ${book.author}`;
    suggestionItem.addEventListener('click', () => {
      searchInput.value = `${book.title} - ${book.author}`;
      suggestionsContainer.style.display = 'none';
    });
    suggestionsList.appendChild(suggestionItem);
  });

  suggestionsContainer.style.display = 'block';
}

function handleFilter() {
  const selectedFilter = filterSelect.value;
  if (selectedFilter === 'publish-date') {
    filteredBooks.sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate));
  } else {
    filteredBooks.sort((a, b) => a[selectedFilter].localeCompare(b[selectedFilter]));
  }
  renderBooks();
}

function handleSort() {
  const selectedSort = sortSelect.value;
  if (selectedSort === 'publish-date') {
    books.sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate));
  } else {
    books.sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
  }
  filteredBooks = books;
  handleInput();
}

fetch('/api/books')
  .then((response) => response.json())
  .then((data) => {
    // Handle the response data
    console.log(data);
  })
  .catch((error) => {
    // Handle any errors that occurred during the request
    console.error(error);
  });
  const bookData = {
    title: 'harry potter',
    author: 'jk rowling',
  };
  
  fetch('/api/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error(error);
    });
  
