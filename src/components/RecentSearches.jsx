function RecentSearches({ recentSearches, handleRecentCityClick }) {
  const handleClick = (city) => {
    handleRecentCityClick(city);
  };

  return (
    <div className="flex justify-center items-center flex-col sm:flex-row mt-4">
      <p className="text-white text-xl mb-2">Recent Searches:</p>
      {recentSearches.map((city, index) => (
        <button
          key={index}
          className="text-sm font-medium transition ease-out hover:bg-[#c8f6fe] bg-white mx-1 text-gray-700 rounded-full px-2 mb-1 capitalize"
          onClick={() => handleClick(city)}
        >
          {city}
        </button>
      ))}
    </div>
  );
}

export default RecentSearches;
