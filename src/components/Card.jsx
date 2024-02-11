const Card = (props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-light text-sm">04:30 PM</p>
      <img
        src="http://openweathermap.org/img/wn/01d@2x.png"
        alt="circle"
        className="w-12 my-1"
      />
      <p className="font-medium">22°</p>
    </div>
  );
};

export default Card;
