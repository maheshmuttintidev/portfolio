import fetch from 'isomorphic-fetch'
import Link from 'next/link'
// import { format } from 'date-fns'
import { BlogPost, BlogPostData } from '../../lib/types'

export async function getStaticProps() {
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     Authorization:
  //       'Bearer 46dbc84602627967fa77eec781fe346f96f4ce66a4af7dfecbf964144acede20b8c748f219f35e0a3e2534d79769d41e2ad0a967f48d1d3050f7091c1b33d0557c0e16d2e92b040c5a52115e1113a8045a6c12097e2edcf78ecb25bc68fedab06cc2d0d7701ea26313ae99af41b981edbfa509e0201b86492974244d129b782a',
  //   }
  const response = await fetch(
    'http://localhost:1337/api/blogs?count=1&populate=*'
    // {
    //   headers: headers,
    // }
  )
  const blogPosts = await response.json()
  //   console.log('blogPosts in getStaticProps: ', JSON.stringify(blogPosts))

  return {
    props: {
      blogPosts: blogPosts.data,
    },
  }
}

function BlogPage({ blogPosts }: BlogPostData) {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogPosts.map((post: BlogPost) => (
          <div key={post.id} className="shadow-lg rounded-md overflow-hidden">
            {/* <div className="relative h-48 w-full">
              <Image
                src={post.cover_image.url}
                layout="fill"
                objectFit="cover"
              />
            </div> */}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                {post.attributes.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {`${formatDate(post.attributes.updatedAt)}`}
              </p>
              {/* <ReactMarkdown className="text-gray-700 text-base mb-4">
                {post.attributes.content.substring(0, 200)}...
              </ReactMarkdown> */}
              <Link href={`/blogs/${post.attributes.slug}`}>
                <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Read more
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()

  let daySuffix
  if (day === 1 || day === 21 || day === 31) {
    daySuffix = 'st'
  } else if (day === 2 || day === 22) {
    daySuffix = 'nd'
  } else if (day === 3 || day === 23) {
    daySuffix = 'rd'
  } else {
    daySuffix = 'th'
  }

  return `${day}${daySuffix} ${month} ${year}`
}

// Example usage:
const formattedDate = formatDate('2023-07-05')
console.log(formattedDate)

export default BlogPage
