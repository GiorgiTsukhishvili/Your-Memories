import React from "react";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

const App = () => {
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
