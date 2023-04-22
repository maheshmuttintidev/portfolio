export type BlogPost = {
  id: number
  attributes: {
    title: string
    banner_image: string
    content: string
    author: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    slug: string
  }
}

export type SingleSlugBlogPost = {
  blogPost: BlogPost
}

export type BlogPostData = {
  blogPosts: BlogPost[]
}

export type Slug = {
  slug: string
}


export type SlugParams = {
  params: Slug
}