import Layout from '../../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';
import ColoredText from '../../components/ColoredText'


const PostLink = props => (
    <li>
        <Link href="/blog/posts/[id]" as={`/blog/posts/${props.title}`}>
            <a>> {props.title}</a>
        </Link>
        <style jsx>{`
            li {
                list-style: none;
                margin: 20px;
            }

            a {
                text-decoration: none;
                color: white;
                
            }

            a:hover {
                opacity: 0.6;
            }
    `}</style>
    </li>
);

const PostList = props => (
    <ul>
        {props.posts.map(post => (
            <PostLink key={post} title={post} />
        ))}
        <style jsx>{`
            ul {
                padding: 0;
            }
        `}</style>
    </ul>
)

const Blog = props => (
    <Layout>
        
        <ColoredText color="white">
            <h1>Dev Blog</h1>
        </ColoredText>
        
        
        <PostList posts={props.posts} />
        
    </Layout>
);

Blog.getInitialProps = async function() {
    const res = await fetch(`${process.env.API_BASE_URL}post-titles`);    
    const data = await res.json();    
    
    return {
        posts: data.titles.map(title => title.slice(0, -3))
    };
};

export default Blog;
