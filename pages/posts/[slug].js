import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import Tags from '../../components/tags'

export default function Post({ post, posts }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title}
                </title>
              </Head>
              <PostHeader
                title={post.title}
                ddnYouTube={post.ddnYouTube}
                date={post.date}
                // author={post.author?.node}
                // categories={post.categories}
              />
            </article>
          </>
          // <>
          //   <article>
          //     <Head>
          //       <title>
          //         {post.title}
          //       </title>
          //       {/* <meta
          //         property="og:image"
          //         content={post.featuredImage?.node?.sourceUrl}
          //       /> */}
          //     </Head>
          //     <PostHeader
          //       title={post.title}
          //       ddnYouTube={post.ddnYouTube}
          //       date={post.date}
          //       author={post.author?.node}
          //       categories={post.categories}
          //     />
          //     <PostBody content={post.content} />
          //     <footer>
          //       {/* {post.tags.edges.length > 0 && <Tags tags={post.tags} />} */}
          //     </footer>
          //   </article>

          //   <SectionSeparator />
          //   {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          // </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  
  const paths = allPosts.edges.map(({ node }) => ({
    params: { id: `/posts/${node.slug}` },
  }))

  return {
    paths: paths.id || [],
    fallback: true,
  }
}
