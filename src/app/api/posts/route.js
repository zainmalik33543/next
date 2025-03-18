import { connectDB } from "@/lib/db";
import Post from "@/lib/models/Post";

export async function POST(req) {
  await connectDB(); // Connect to database
  const { title, content } = await req.json();
  if (!title || !content) {
    return new Response(JSON.stringify({ error: "Title and Content are required!" }), { status: 400 });
  }
  const newPost = await Post.create({ title, content });
  return new Response(JSON.stringify(newPost), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
export async function GET() {
    await connectDB();
    const posts = await Post.find(); // Fetch all posts
    return new Response(JSON.stringify(posts), { headers: { "Content-Type": "application/json" } });
  }
  