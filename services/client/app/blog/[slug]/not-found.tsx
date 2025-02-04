import { Button } from "@/components/core-ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-2">Oops!</h2>
        <p className="text-gray-600 ">The blog post you're looking for doesn't exist.</p>
        <div className="flex gap-4">
            <Button asChild className="mt-4"><Link href="/blog">See All Posts</Link></Button>
            <Button asChild className="mt-4 bg-secondary"><Link href="/">Return to Home</Link></Button>
        </div>
      </div>
    )
  }