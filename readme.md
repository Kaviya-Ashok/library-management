# Library Management System

This is a web application for managing a library, allowing users to search for books, filter and sort the book list, and add books to a cart for checkout.

## Features

- Search bar with suggestions based on book title, author, genre, and publish date
- Indication of book availability and number of copies
- Filtering and sorting options for the book list
- Book count display based on search results and filters
- Cart feature for adding books and checking out
- Integration with external services for social media authentication and email/mobile number verification (not implemented in this example)

## Technologies Used

- HTML, CSS, JavaScript
- Node.js
- Express.js
- Sequelize (SQL ORM)

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd library-management`
3. Install dependencies: `npm install`
4. Configure the database connection in `config.js`
5. Start the server: `node server.js`
6. Open your browser and visit `http://localhost:3000`

## Usage

- Sign up or log in to access the library management features.
- Use the search bar to search for books by title, author, genre, or publish date.
- Click on a suggestion to fill the search bar with the selected book information.
- Use the filter and sort options to refine the book list display.
- Click on the "Add to Cart" button to add books to the cart for checkout.
- View the cart and click "Checkout" to complete the rental process.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

