export default function CoverImage({ ddnYouTube }) {
  function regex(ddnYouTube) {
    const reg = /\w+$/gim;
    return ddnYouTube.match(reg);
  }
  const image = (
    <iframe
      allow="picture-in-picture"
      allowFullScreen
      // frameBorder="0"
      width="100%"
      height="350px"
      src={`https://www.youtube.com/embed/${regex(ddnYouTube)}`}
      className="rounded-t-xl"
    />
  )
  return (
    <div className="md:mx-0 rounded-xl">
      {ddnYouTube ? (
        image
      ): (
        <p>Youtube Link: {ddnYouTube}</p>
      )}
    </div>
  )
}
