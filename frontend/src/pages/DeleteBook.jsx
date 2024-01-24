// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Spinner from "../components/Spinner";
import Backbutton from "../components/Backbutton";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("Error deleting book");
        console.log(error);
      });
  };

  return (
    <>
      <div className="p-4">
        <Backbutton />
        <h1 className="text-3xl my-4">Delete Book</h1>
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl p-8 w-[600px] mx-auto">
          <h3 className="text-2xl">
            Are you sure you want to delete this book?
          </h3>
          <button
            className="p-4 bg-red-600 text-white m-8 w-full"
            onClick={handleDeleteBook}>
            Yes, delete it
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteBook;
