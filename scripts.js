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
  
  function renderBooks() {
    booksList.innerHTML = '';
  
    filteredBooks.forEach((book) => {
      const bookItem = document.createElement('li');
      bookItem.innerHTML = `
        <div>
          <strong>Title:</strong> ${book.title}<br>
          <strong>Author:</strong> ${book.author}<br>
          <strong>Subject:</strong> ${book.subject}<br>
          <strong>Publish Date:</strong> ${book.publishDate}<br>
          <strong>Availability:</strong> ${book.availability ? 'Available' : 'Not Available'} (${book.copies} copies)<br>
        </div>
        <button class="add-to-cart" data-id="${book.id}">Add to Cart</button>
      `;
      booksList.appendChild(bookItem);
    });
  
    updateBookCount();
    addAddToCartListeners();
  }
  
  function updateBookCount() {
    bookCountElement.textContent = `Total Books: ${filteredBooks.length}`;
  }
  
  function addAddToCartListeners() {
    const addToCartButtons = document.getElementsByClassName('add-to-cart');
    Array.from(addToCartButtons).forEach((button) => {
      button.addEventListener('click', handle
  