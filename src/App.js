import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header"; // Import Header
import Footer from "./components/Footer"; // Import Footer

const App = () => {
  return (
    <Router>
      <div>
        {/* Header */}
        <Header />
        {/* Main Content */}
        <main className="min-h-screen">
          <Routes>
            <Route path="/blog-post" element={<HomePage />} />
            <Route path="/post/:postId" element={<PostPage />} />
          </Routes>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
