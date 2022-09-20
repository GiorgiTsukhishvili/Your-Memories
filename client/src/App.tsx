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
      dispatch(postActionAll(data.data.posts));
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="w-full min-h-[100vh] pb-20 bg-gradient-to-r from-cyan-200 to-blue-300">
      <Navbar />
      <div className="w-[80%] gap-10 flex sm:flex-row flex-col sm:justify-between sm:items-start items-center m-auto">
        <Form />
        <Posts />
      </div>
    </div>
  );
};

export default App;
