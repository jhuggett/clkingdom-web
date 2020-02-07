import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import fetch from 'isomorphic-unfetch';
import ColoredText from '../../../components/ColoredText'


const Post = props => {
    const router = useRouter();

    return (
        <Layout>
            <ColoredText color="white">
                <h1>{props.title}</h1>
                <h3>Written by {props.author} on {props.date}</h3>
                <div><ReactMarkdown source={props.content} /></div>
            </ColoredText>
        </Layout>
    );
};

Post.getInitialProps = async function(context) {
    const { id } = context.query
    const res = await fetch(`${process.env.API_BASE_URL}posts/${id + ".md"}`)
    const data = await res.text()
    
    const result = matter(data)
    
    return {
        title: result.data.title,
        author: result.data.author,
        date: result.data.date.toDateString(),
        content: result.content
    }
}

export default Post;