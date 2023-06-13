import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react';
import { Col, Row,Button } from 'antd';

import { getPosts } from '~/models/post.server';
export const loader = async () => {
  return json({ posts: await getPosts() })

}

const style: React.CSSProperties = { padding: '8px 0', margin: "10px", fontSize: "20px" };
const ul: React.CSSProperties = { display: 'flex', flexWrap: "wrap" }

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>()
  return (
    <main>
      <Row>
        <Col span={12}><h1 style={style}>Post</h1></Col>
        <Col span={12}><Link to="admin" className='text-blue-600 underline'><Button>Admin</Button></Link></Col>
      </Row>
      <ul style={ul}>
        {posts.map((post) => (
          <li key={post.slug} style={style}><Link to={post.slug} >{post.title}</Link></li>
        ))}
      </ul>
    </main>
  );
}
