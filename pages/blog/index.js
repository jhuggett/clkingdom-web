import Layout from '../../components/Layout'
import Link from 'next/link'

const PostLink = props => (
    <li>
        <Link href="/blog/posts/[id]" as={`/blog/posts/${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export default function Blog() {
    return (
        <Layout>
            <h1>Blog</h1>
            <ul>
                <PostLink title="Test1" />
                <PostLink title="Test2" />
            </ul>
        </Layout>
    );
}