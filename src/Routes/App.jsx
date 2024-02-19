import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Sidebar from "../Component/Sidebar";
import Createpost from "../Component/Createpost";
import Post from "../Component/Post";
import PostList from "../Component/PostList";
import { useState } from "react";
import PostListProvider from "../Store/Post-list-Store";
import { Outlet } from "react-router-dom";

function App() {
   const [selctedTab, setSelctecTab] = useState("Home");

  return (
    <>
    <PostListProvider>
      <div className="app-container">
        <Sidebar selctedTab={selctedTab}
        setSelctecTab={setSelctecTab}
        />
        <div className="content">
          <Header></Header>
          <Outlet/>
          <Footer></Footer>
        </div>
      </div>
      </PostListProvider>
    </>
  );
}

export default App;
