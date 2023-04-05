import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <Link to={`/book/${book.isbn13}`}>
      <div className="relative transition duration-500 hover:scale-105 shadow hover:shadow-lg">
        <img
          className="object-cover w-full"
          src={book.image}
          alt="Books Cover"
        />

        <div className="bg-black bg-opacity-75 text-white absolute inset-0 p-5 opacity-0 hover:opacity-100 transition duration-500 rounded flex flex-col">
          <p>{book.title}</p>
          <br />
          <p>{book.subtitle}</p>
          <br />
          <p className="mt-auto">Price: {book.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
