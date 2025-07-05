import { Link } from 'react-router-dom';

const posts = [
  { slug: 'post1', title: 'My First Blog Post' },
  { slug: 'post2', title: 'Another Blog Entry' },
];

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/posts/${post.slug}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
