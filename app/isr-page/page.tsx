import Post from "../models/post";
async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    {
      next: { revalidate: 10 }, // regenerate every 10 seconds
    },
  );
  return res.json();
}

export default async function ISRPage() {
  const posts = await getPosts();

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Incremental Static Regeneration (ISR)</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <p style={{ marginTop: "20px", fontStyle: "italic" }}>
        This page regenerates every 10 seconds.
      </p>
    </div>
  );
}
