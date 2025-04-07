import Link from "next/link";


export default async function Blogs() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();



  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}
    >
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            width: "300px",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body.substring(0, 50)}...</p>
          <Link
            href={`/blogs/${post.id}`}
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}
