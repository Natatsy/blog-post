import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Change the route to use "slug" instead of "postId" */}
            <Route path="/post/:slug" element={<PostPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
