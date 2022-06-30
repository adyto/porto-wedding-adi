import React, { useState } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import BookDataService from "../../../services/book-services";

export default function AddBooks({ id, setBookId }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Hadir");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || author === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newBook = {
      title,
      author,
      status,
    };

    try {
      if (id !== undefined && id !== "") {
        await BookDataService.updateBook(id, newBook);
        setBookId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await BookDataService.addBooks(newBook);
        setMessage({ error: false, msg: "Berhasil Menambahkan Comment!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setAuthor("");
  };
  return (
    <>
      <div className="ucapan mt-1">
        <h1 className="fw-bold fs-1">Ucapkan Sesuatu</h1>
        <h2 className="mt-2 fs-6">Berikan Ucapan & Doa Restu</h2>
      </div>
      <div className="section w-details-area center-text">
        <div className="">
          <div className="card">
            <div className="card-bodys">
              {message?.msg && (
                <Alert
                  variant={message?.error ? "danger" : "success"}
                  dismissible
                  onClose={() => setMessage("")}
                >
                  {message?.msg}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Nama anda..."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <InputGroup>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      id="formBookAuthor"
                      placeholder="Ucapkan Selamat..."
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group>
                <ButtonGroup aria-label="Basic example" className="mb-3">
                  <Button
                    disabled={flag}
                    variant="success"
                    onClick={() => {
                      setStatus("Hadir");
                      setFlag(true);
                    }}
                  >
                    Hadir
                  </Button>
                  <Button
                    variant="danger"
                    disabled={!flag}
                    onClick={() => {
                      setStatus("Tidak Hadir");
                      setFlag(false);
                    }}
                  >
                    Tidak Hadir
                  </Button>
                </ButtonGroup>
                <div className="d-grid gap-2 ">
                  <Button
                    variant="primary"
                    type="Submit"
                    className="btn-kirim-undangan"
                    // onClick={getBooks}
                  >
                    Kirim
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
