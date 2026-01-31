import Post from "../models/post";
async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    {
      next: { revalidate: false },
    },
  );
  return res.json();
}

export default async function SSGPage() {
  const posts = await getPosts();

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Static Site Generation (SSG)</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
