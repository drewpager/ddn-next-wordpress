export default function CoverImage({ ddnYouTube }) {
  function regex(ddnYouTube) {
    const reg = /\w+$/gim;
    return ddnYouTube.match(reg);
  }
  const image = (
    <iframe
      allow="picture-in-picture"
      allowFullScreen
      frameBorder="0"
      width="600px"
      height="300px"
      src={`https://www.youtube.com/embed/${regex(ddnYouTube)}`}
    />
  )
  return (
    <div className="md:mx-0">
      {ddnYouTube ? (
        image
      ): (
        <p>Youtube Link: {ddnYouTube}</p>
      )}
    </div>
  )
}
