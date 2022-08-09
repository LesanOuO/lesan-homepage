import { Container, Badge } from '@chakra-ui/react'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { useColorModeValue } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/post'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  oneDark,
  oneLight
} from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function Post({ postData }) {
  return (
    <Layout title={postData.title}>
      <style jsx>{`
        .markdown-body {
          box-sizing: border-box;
          min-width: 200px;
          max-width: 980px;
          margin: 0 auto;
          padding: 45px;
          background-color: transparent;
        }

        @media (max-width: 767px) {
          .markdown-body {
            padding: 15px;
          }
        }
      `}</style>

      <Container maxW="container.lg">
        <Title>
          {postData.title} <Badge>{postData.date}</Badge>
        </Title>
        <div
          className={useColorModeValue(
            'markdown-body-light markdown-body',
            'markdown-body-dark markdown-body'
          )}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // eslint-disable-next-line no-unused-vars
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    // showLineNumbers={true}
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    style={useColorModeValue(oneLight, oneDark)}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          >
            {postData.content}
          </ReactMarkdown>
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
