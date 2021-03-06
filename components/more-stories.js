import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Previous Doses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-8 lg:col-gap-16 row-gap-10 md:row-gap-18 mb-32">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            ddnYouTube={node.ddnYouTube?.customYoutubeEmbed}
            date={node.date}
            author={node.author?.node}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
