import Bookrow from "./Bookrow";

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

function Booklist() {
  return (
    <ul className="space-y-4">
      {Books.map((book) => (
        <li key={book.id} className="flex items-center justify-between p-4 rounded-lg bg-white shadow ">
          <Bookrow book={book} />
        </li>
      ))}
    </ul>
  );
}

export default Booklist;
