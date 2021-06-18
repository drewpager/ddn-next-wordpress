import CoverImage from './cover-image';
import Avatar from './avatar';

export default function Card({ 
  title,
  date,
  excerpt,
  author,
  slug,
  ddnYouTube
}) {
  return (
    <div class="p-6 m-10 max-w-7xl mx-auto bg-black rounded-xl shadow-md flex items-center space-x-4">
      <div class="flex-shrink-0">
      <div className="mb-8 md:mb-16">
        {ddnYouTube && (
          <CoverImage ddnYouTube={ddnYouTube} />
        )}
      </div>
      </div>
      <div>
        <div class="text-3xl font-bold text-white">{title}</div>
        <div class="text-md font-medium text-white" dangerouslySetInnerHTML={{ __html: excerpt }} />
        <div class="text-sm font-small text-white m-2"><Avatar author={author} /></div>
      </div>
    </div> 
  )
}