interface CardNosotrosProps {
    name: string;
    status: string;
    image: string;
  }
  
  const CardNosotros: React.FC<CardNosotrosProps> = ({ name, status, image }) => {
    return (
      <div className="bg-background-violet w-[160px] h-[200px] rounded-md shadow-2xl pt-[16px] px-[16px]">
        <img src={image} alt="" />
        <p className="text-white text-[15px]">{name}</p>
        <p className="text-white text-[10px]">{status}</p>
      </div>
    );
  };
  
  export default CardNosotros;