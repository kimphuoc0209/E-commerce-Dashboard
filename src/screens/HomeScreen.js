import React from "react";
import Main from "../components/Home/Main";
// import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import Toast from "../components/LoadingError/Toast";

const HomeScreen = () => {
  return (
    <>
      <Toast />
      {/* <Sidebar /> */}
      <main className="main-wrap">
        <Header />
        <Main />
      </main>
    </>
  );
};
export default HomeScreen;
