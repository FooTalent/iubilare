const YouTubePlayer: React.FC = () => {
  return (
    <iframe
      src="https://www.youtube.com/embed/DdzcAr6vCEI?si=BNDtgZGitVHDMWp8"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="w-[20.5rem] h-[17.125rem] md:w-[736px] md:h-[463px] xl:w-[637px] xl:h-[407px]"
    ></iframe>
  );
};

export default YouTubePlayer;
