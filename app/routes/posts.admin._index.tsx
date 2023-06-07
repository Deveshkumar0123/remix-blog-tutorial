import { Link } from "@remix-run/react"

export default function postAdminIndex() {
  return (
    <p>
    <Link to="new" className="text-red-600 underline"> Create a New Post</Link>
    </p>
  )
}
