import { connectDB } from "@/lib/db";
import Post from "@/lib/models/Post";

export async function GET(req, { params }) {
  await connectDB(); // Ensure database is connected

  try {
    const param =  await params;
    const postId = param.id; // ✅ Extract params correctly
    console.log("Post ID:", postId);
    if (!postId) {
      return new Response(JSON.stringify({ error: "Post ID is missing" }), { status: 400 });
    }

    const post = await Post.findById(postId); // Fetch post by ID
    if (!post) {
      return new Response(JSON.stringify({ error: "Post not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(post), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching post:", error);
    return new Response(JSON.stringify({ error: "Invalid Post ID" }), { status: 400 });
  }
}
