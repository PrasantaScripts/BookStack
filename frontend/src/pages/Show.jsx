import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";

const Show = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const BookVal = books.book;
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        console.log(response.data);
        setBooks(response.data);
        setLoading(false);
        console.log("Books state:", books);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);  
  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-black-500">ID</span>
            <span>{BookVal._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-black-500">Title</span>
            <span>{BookVal.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-black-500">Author Name</span>
            <span>{BookVal.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-black-500">Publish Year</span>
            <span>{BookVal.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-black-500">Creation TIme</span>
            <span>{new Date(BookVal.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-black-500">updated Time</span>
            <span>{new Date(BookVal.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Show;
