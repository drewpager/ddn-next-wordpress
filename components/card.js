import CoverImage from './cover-image';
import Avatar from './avatar';
import Date from '../components/date';
import Link from 'next/link';

export default function Card({ 
  title,
  date,
  excerpt,
  author,
  slug,
  ddnYouTube
}) {
  return (
    <div className="p-6 m-10 max-w-7xl mx-auto bg-accent-ddn border-black rounded-xl flex shadow-md items-center space-x-4">
      <div className="mb-8 md:mb-4 w-1/2">
        {ddnYouTube && (
          <CoverImage ddnYouTube={ddnYouTube} />
        )}
      </div>
      <div className="w-1/2">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <div className="text-3xl font-bold text-white hover:underline">{title}</div>
      </Link>
        <div className="text-2xl font-semibold text-white italic"><Date dateString={date} /></div>
        <div className="text-md font-medium text-white" dangerouslySetInnerHTML={{ __html: excerpt }} />
        <div className="text-sm font-small text-white m-2"><Avatar author={author} /></div>
      </div>
    </div> 
  )
}