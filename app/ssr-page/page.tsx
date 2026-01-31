async function getServerData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-store",
  });
  return res.json();
}

export default async function SSRPage() {
  const post = await getServerData();

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Server-Side Rendering (SSR)</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
