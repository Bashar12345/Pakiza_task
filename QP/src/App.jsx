// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/protectedRoutes";
import NotFoundPage from "./error/NotFoundPage";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostList from "./pages/post/PostList";
import StoryList from "./pages/story/StoryList";
import TextStoryForm from "./pages/story/TextStoryForm";
import PhotoStroy from "./pages/story/PhotoStroy";
import CreateStory from "./pages/story/CreateStory";
import NewsFeed from "./pages/NewsFeed";
import Home from "./Home";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="posts" element={<NewsFeed />} />
              <Route path="stories-lists" element={<StoryList />} />
              <Route path="post-stories" element={<CreateStory />} />

              <Route path="stories-form" element={<TextStoryForm />} />
              <Route path="photo-stories" element={<PhotoStroy />} />
            </Route>
          </Route>
          {/* Handle 404 - Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
