import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/Layout'
import ColoredText from '../components/ColoredText'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

const Index = props => (
    <Layout>
            <ReactMarkdown source={props.content} />
        
    </Layout>
)

Index.getInitialProps = async () => {
    console.log(__dirname);

    const raw = await import("../data/intro.md")
    const content = matter(raw.default)

    return {
        content: content.content
    }
}



export default Index;