import type { LoaderArgs } from "@remix-run/node"
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import { getPost } from "~/models/post.server";

export const loader = async ({ params }: LoaderArgs) => {
  const post = await getPost(params.slug as string);
  return json({ post });
};
export default function postsSlug() {
  const { post } = useLoaderData<typeof loader>();
  return (
    <main>
      <h1 className="my-6 border-b-2 text-center text-3xl">
        {post?.title}
      </h1>
      <p>{post?.markdown}</p>
    </main>
  )
} 
