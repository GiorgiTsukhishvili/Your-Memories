import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import { postActionAll } from "./redux/actions/postActions";
import * as api from "./api";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.fetchPosts();
      dispatch(postActionAll(data));
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="w-full h-[100vh]  bg-gradient-to-r from-cyan-200 to-blue-300">
      <Navbar />
      <div className="w-[80%] flex justify-between m-auto">
        <Posts />
        <Form />
      </div>
    </div>
  );
};

export default App;
