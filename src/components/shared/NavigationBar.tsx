import logoImage from '../../assets/image-removebg-preview1.png';

const NavigationBar = () => {
  return (
    <div className="flex  items-center justify-between">
      <div className="flex justify-center items-center">
        <img src={logoImage} alt="Bearal and Busnasie Logo" className="w-16 h-16" />
      </div>
      <div >
        <ul className="flex justify-between space-x-10">
          <li>Product Reviews </li>
          <li>Retail Operations</li>
          <li>Supplier and Distributor Relations </li>
          <li>Acquisitions </li>
          <li>Technology and Innovation</li>
        </ul>
      </div>
    </div>
  );

};

export default NavigationBar;
