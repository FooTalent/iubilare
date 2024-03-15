
const WhatsappButton = () => {
  const containerStyle = 'fixed bottom-4 right-4 z-10'; // Adjust as needed
  const buttonStyle = 'p-2 bg-[#439373] rounded-full cursor-pointer hover:bg-green-500';
  const imageStyle = 'w-6 h-6';
  const handleButtonClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=573008659238&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <div className={containerStyle}>
      <button className={buttonStyle} onClick={handleButtonClick}>
        <img src="./whatsappButton.png" alt="WhatsApp Icon" className={imageStyle} />
      </button>
    </div>
  );
};

export default WhatsappButton;