import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="mb-6 flex gap-4 border-b pb-4">
      <Link to="/" className="text-blue-600 hover:underline">Home</Link>
      <Link to="/about" className="text-blue-600 hover:underline">About</Link>
    </nav>
  );
}
