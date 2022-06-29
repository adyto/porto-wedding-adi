import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import BookDataService from "../../../services/book-services";

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();

    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="container">
      <div className="card-bodyyss">
        <Button variant="dark-edit" onClick={getBooks}>
          Refresh List
        </Button>
        <Table striped bordered hover size="sm">
          <thead />
          <tbody>
            {books.map((doc) => {
              return (
                <div className="comment">
                  <div className="comment-image-container">
                    <img src="icon/avatar.jpeg" alt="avatar" />
                  </div>
                  <div>
                    <h5> {doc.title}</h5>
                    <p className=""> {doc.author}</p>
                    <p className=""> {doc.status}</p>
                  </div>
                </div>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default BooksList;
