import { useParams } from 'react-router-dom';
import MarkdownIt from 'markdown-it';
import { useEffect, useState } from 'react';

const md = new MarkdownIt();

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (!slug) return;

    import(`../posts/${slug}.md?raw`)
      .then((res) => {
        const html = md.render(res.default);
        setContent(html);
      })
      .catch(() => {
        setContent('<p class="text-red-500">Post not found.</p>');
      });
  }, [slug]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 capitalize">{slug?.replace(/-/g, ' ')}</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
