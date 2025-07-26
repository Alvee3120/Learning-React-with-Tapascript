import Search from "./Search";
import Header from "./Header";
import Booklist from "./Booklist";

import { useState } from "react";

const Books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    featured: false,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    featured: false,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    featured: false,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    featured: false,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    featured: false,
  },
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    featured: false,
  },
  {
    id: 7,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    featured: false,
  },
  {
    id: 8,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    featured: false,
  },
  {
    id: 9,
    title: "Animal Farm",
    author: "George Orwell",
    featured: false,
  },
  {
    id: 10,
    title: "Moby-Dick",
    author: "Herman Melville",
    featured: false,
  },
];

function Boimela() {
  const [SearchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState(Books);

  console.log(books);
  

  const toggleFeature = (id) => {
    setBooks(
      books.map((book) => book.id === id ? { ...book, featured: !book.featured } : book)
    );
  };
  return (
    <div className=" mx-auto p-10">
      <Header />
      <Search SearchTerm={SearchTerm} onSearchTerm={setSearchTerm} />
      <Booklist SearchTerm={SearchTerm} Books={books} ontoggleFeature = {toggleFeature}/>
    </div>
  );
}

export default Boimela;
