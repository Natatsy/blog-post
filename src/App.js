import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Change to HashRouter
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
            <Route path="/" element={<HomePage />} />
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
