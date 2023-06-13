import { Link, useActionData } from "@remix-run/react"
import { Button } from "antd"
import type { ActionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react"
import { json } from "@remix-run/node";

import { getPost } from "~/models/post.server"
import { useEffect, useState } from "react";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData()
  const searchInput = formData.get("searchInput");
  return json({ post: await getPost(searchInput) });
  
}

export default function postAdminIndex() {
  const [inputValue,setInputValue] =useState(' ')
  const post = useActionData<typeof action>()

  useEffect(()=>{
    console.log("searchInput",post);
  },[post])
  return (
    <><Form method="post">
      <input type="text" value={inputValue} name="searchInput" placeholder="Search..." onChange={(e)=>setInputValue(e.target.value)} />
      <button type="submit">
        Search
      </button>
    </Form><p><Link to="new" className="text-red-600 underline"><Button>Create a New Post</Button></Link></p></>


  )
}