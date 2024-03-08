import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="fixed inset-x-0 bottom-0 flex flex-col bg-gray-100 p-4 max-w-[425px] mx-auto">
            <div className='flex flex-row justify-between items-center'>
                <h2 className="text-2xl font-bold mb-2">Iubilare</h2>
                <div className="flex space-x-2 mb-4">
                    <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-gray-500" />
                    <FontAwesomeIcon icon={faFacebook} className="h-6 w-6 text-gray-500" />
                </div>
            </div>
          <p className="mb-2">Av. de Mayo 881 - 4to piso D - CABA - CP: 1084</p>
          <p className="mb-2"><FontAwesomeIcon icon={faPhone} className="h-6 w-6 text-gray-500" />Tel: (011) 4342-1817/4783</p>
          <p className='mb-2'><FontAwesomeIcon icon={faEnvelope} className="h-6 w-6 text-gray-500" />info@iubilare.com</p>
          
        </div>
      );
};

export default Footer;
