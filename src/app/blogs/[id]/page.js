import Link from "next/link";

export default async function BlogPost({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href="/blogs" style={{ color: "blue", textDecoration: "underline" }}>
        ⬅ Back to Blogs
      </Link>
    </div>
  );
}
