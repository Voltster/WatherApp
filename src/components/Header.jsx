const Header = () => {
  return (
    <header className="bg-[#0061abba] text-white py-4 text-center flex flex-row justify-around items-center  ">
      <img
        className="rounded-full"
        width={45}
        src="https://img.freepik.com/free-psd/3d-icon-weather-conditions-with-rain-sun_23-2150108737.jpg?w=740&t=st=1707669461~exp=1707670061~hmac=0407797dbac6dd4bec457d6f9a6f50e4e44da1bf03194f65e9de1c6a70b1a040"
        alt=""
      />
      <nav>
        <ul className="flex flex-row justify-around items-center gap-x-6  text-xl">
          <li className="p-2 hover:border-b ">
            <a href="#weatherApp">Weather App</a>
          </li>
          <li className="p-2 hover:border-b ">
            <a href="#stateWise">State Wise</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
