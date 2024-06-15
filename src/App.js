import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import "./App.css";
import Colors from "./components/Colors";
import Landing from "./pages/Landing";
import Header1 from "./components/Header1";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Settings from "./pages/Settings";
import Progress from "./pages/Progress";
import Account from "./pages/Accounts";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const Layout1 = ({ children }) => (
    <>
      <Header1 />
      {children}
      <Footer />
    </>
  );
  return (
    <div>
      <div>
        {isLoading ? (
          <div className="spinner-container">
            <Bars
              height="80"
              width="80"
              color={Colors.violet}
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <>
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Layout1>
                      <Landing />
                    </Layout1>
                  }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="chat" element={<Chat />} />
                  <Route path="progress" element={<Progress />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="account" element={<Account />} />
                </Route>
              </Routes>
            </Router>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
