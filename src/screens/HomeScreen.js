import React from "react";
// import Main from "../components/Home/Main";
import Sidebar from "../components/sidebar";
// import Header from "../components/Header";
// import MainProducts from "../components/Products/MainProducts";
// import AddProductMain from "../components/Products/AddProductMain";
// import Orders from "../components/Orders/Orders";
// import OrderMain from "../components/Orders/OrderMain";
// import OrderDetailInfo from "../components/Orders/OrderDetailInfo";
// import OrderDetailProducts from "../components/Orders/OrderDetailProducts";
// import OrderDetailMain from "../components/Orders/OrderDetailMain";
// import UserComponent from "../components/Users/UserComponent";
import Message from "../components/LoadingError/Error";

const HomeScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        {/* <Header />
        <Main /> */}
        {/* <MainProducts /> */}
        {/* <AddProductMain /> */}
        {/* <Orders /> */}
        {/* <OrderMain /> */}
        {/* <OrderDetailInfo /> */}
        {/* <OrderDetailProducts /> */}
        {/* <OrderDetailMain /> */}
        {/* <UserComponent /> */}
        <Message />
      </main>
    </>
  );
};
export default HomeScreen;
