import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  ddnYouTube,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="max-w-2xl rounded-xl overflow-hidden shadow-lg">
      <div className="mb-3">
        <CoverImage ddnYouTube={ddnYouTube} />
      </div>
      <h3 className="text-3xl leading-snug p-2">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
      </h3>
      <div className="text-lg p-2">
        <Date dateString={date} />
      </div>
      <div
        className="text-lg leading-relaxed mb-4 p-2"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <div className="p-2">
        <Avatar author={author} />
      </div>
    </div>
  )
}
