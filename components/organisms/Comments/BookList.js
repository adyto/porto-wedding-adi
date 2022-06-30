import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";
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
        <Button
          variant="dark-edit"
          onClick={getBooks}
          className="btn-refresh-undangan ms-2 mt-2"
        >
          Refresh Ucapan
        </Button>
        <Table striped bordered hover size="sm">
          <tbody>
            {books.map((doc) => {
              return (
                <div className="container">
                  <div className="row border-top border-dark d-flex mt-2 mb-1">
                    <div className="col-1 py-2 me-2">
                      <FaRegUserCircle className="fs-1" />
                    </div>
                    <div className="col">
                      <div className="d-flex flex-column ">
                        <div className="row">
                          <div className="col-4 ">
                            <h5 className="fw-bold"> {doc.title}</h5>
                          </div>
                          <div className="col">
                            <p className=""> {doc.status}</p>
                          </div>
                        </div>
                        <p className="mt-2 text-break"> {doc.author}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </tbody>
        </Table>
        {/* <DataTable /> */}
      </div>
    </div>
  );
};

export default BooksList;
