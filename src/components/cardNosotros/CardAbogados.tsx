interface CardAbogadosProps {
    name: string;
    status: string;
    image: string;
  }
  
  const CardAbogados: React.FC<CardAbogadosProps> = ({ name, status, image }) => {
    return (
      <div className="bg-white w-[160px] h-[200px] rounded-md shadow-2xl shadow-avatar-shadow pt-[16px] px-[16px]">
        <img src={image} alt="" />
        <p className="text-black text-[15px]">{name}</p>
        <p className="text-black text-[10px]">{status}</p>
      </div>
    );
  };
  
  export default CardAbogados;