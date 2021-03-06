import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import Card from './card'

export default function HeroPost({
  title,
  date,
  excerpt,
  author,
  slug,
  ddnYouTube
}) {
  return (
    <section>
      <Card 
        title={title} 
        excerpt={excerpt} 
        ddnYouTube={ddnYouTube} 
        author={author}
        date={date} 
      />
      {/* <div className="mb-8 md:mb-16">
        {ddnYouTube && (
          <CoverImage ddnYouTube={ddnYouTube} />
        )}
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a
                className="hover:underline"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <Avatar author={author} />
        </div>
      </div> */}
    </section>
  )
}
