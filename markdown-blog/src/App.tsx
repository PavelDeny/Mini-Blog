import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import PostPage from './pages/PostPage';

export default function App() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:slug" element={<PostPage />} />
      </Routes>
    </div>
  );
}
