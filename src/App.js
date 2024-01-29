import {useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App(){
    const [books,setBooks] = useState([]);

    //Dekete book

   const deletebookbyId = (id)=>{
      const updatedBooks = books.filter((book)=>{
           return  book.id != id;
      });

      setBooks(updatedBooks);
   }

   //create book

   const createBook = (title) =>{
       const updatedBooks = [
        ...books,
        {
          id: Math.round(Math.random() * 9999),
          title:title
        }
       ];
       setBooks(updatedBooks);
    };  

    return <div className='app'>
              <BookList books={books} onDelete={deletebookbyId}/>
              <BookCreate onCreate={createBook}/>
           </div>;
}

export default App;