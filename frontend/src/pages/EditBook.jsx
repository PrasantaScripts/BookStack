/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        console.log("data :>> ", response.data.book.author);
        setAuthor(response.data.book.author);
        setPublishYear(response.data.book.publishYear);
        setTitle(response.data.book.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("an error happened, please check console");
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      title: title,
      author: author,
      publishYear: publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5000/books/${id}`, data)
      .then(() => {
        console.log("The book has been saved!");
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(`Error! ${error}`);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="p-4">
        <Backbutton />
        <h1 className="text-3xl my-4">Edit Book</h1>
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col border-2 border-Green-400 rounded-xl p-4 mx-auto w-[600px]">
          <div className="my-4">
            <label className="text-xl mr-4 text-yellow-500 ">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-yellow-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-yellow-500 ">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-yellow-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-yellow-500 ">PublishYear</label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-yellow-500 px-4 py-2 w-full"
            />
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default EditBook;
