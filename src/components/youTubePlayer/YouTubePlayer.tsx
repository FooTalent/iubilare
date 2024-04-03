const YouTubePlayer: React.FC = () => {
  return (
    <iframe
      width="637"
      height="407"
      src="https://www.youtube.com/embed/t2xk5Is3jAM?si=jd70sWiGBEltS-ZX"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default YouTubePlayer;
