const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="text-xl font-bold text-blue-600">🌍 ALX Listing</div>
      <input
        type="text"
        placeholder="Search properties"
        className="my-2 md:my-0 px-4 py-2 border rounded w-full md:w-1/2"
      />
      <div className="flex space-x-4 mt-2 md:mt-0">
        <button className="text-blue-600">Sign In</button>
        <button className="text-white bg-blue-600 px-4 py-2 rounded">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
