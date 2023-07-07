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
    // we can Add more books as needed
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
  