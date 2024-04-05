const YouTubePlayer: React.FC = () => {
  return (
    <iframe
      src="https://www.youtube.com/embed/t2xk5Is3jAM?si=jd70sWiGBEltS-ZX"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="w-[736px] h-[463px] xl:w-[637px] xl:h-[407px]"
    ></iframe>
  );
};

export default YouTubePlayer;
