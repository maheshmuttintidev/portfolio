import { GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import { BlogPost, SingleSlugBlogPost, Slug, SlugParams } from './types'
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus as style } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    'http://localhost:1337/api/blogs?count=1&populate=*'
    // {
    //   headers: headers,
    // }
  )
  let blogPosts = await response.json()

  const paths = blogPosts.data.map((post: BlogPost) => ({
    params: { slug: post?.attributes?.slug },
  }))
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }: SlugParams) {
  console.log('params: ', params)
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     Authorization:
  //       'Bearer 46dbc84602627967fa77eec781fe346f96f4ce66a4af7dfecbf964144acede20b8c748f219f35e0a3e2534d79769d41e2ad0a967f48d1d3050f7091c1b33d0557c0e16d2e92b040c5a52115e1113a8045a6c12097e2edcf78ecb25bc68fedab06cc2d0d7701ea26313ae99af41b981edbfa509e0201b86492974244d129b782a',
  //   }
  const response = await fetch(
    `http://localhost:1337/api/blogs?filters[slug]=${params.slug}&populate=*`
    // {
    //   headers: headers,
    // }
  )
  const blogPost = await response.json()
  console.log('blogPost in getStaticProps: ', JSON.stringify(blogPost))

  return {
    props: {
      blogPost: blogPost.data[0],
    },
  }
}

function BlogPostPage({ blogPost }: SingleSlugBlogPost) {
  console.log('blogPost: ', blogPost)
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto pt-3 mt-4">
      <ReactMarkdown>{blogPost.attributes.title}</ReactMarkdown>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                // eslint-disable-next-line react/no-children-prop
                children={String(children).replace(/\n$/, '')}
                style={style}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            )
          },
        }}
      >
        {blogPost.attributes.content}
      </ReactMarkdown>
    </div>
  )
}

export default BlogPostPage
