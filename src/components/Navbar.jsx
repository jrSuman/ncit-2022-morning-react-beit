import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-blue-500 px-20 py-4 space-y-4">
      {/* top bar */}
      <div>
        <ul className="flex  items-center justify-end gap-x-4 text-white font-semibold">
          <li>See More</li>
          <li>Become SEller</li>
          <li>Help & support</li>
          <li>See More</li>
          <li>Become SEller</li>
          <li>Help & support</li>
        </ul>
      </div>

      {/* center */}
      <div className="flex justify-between">
        <img src={logo} alt="daraz" className="h-10" />

        <div className="bg-white flex w-2xl">
          <input type="text" placeholder="Search for Products, brands" className="w-full px-4 focus:outline-0"/>
          <div className="h-full w-10 bg-blue-300 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>
        </div>

        <div></div>
      </div>

    </div>
  );
};

export default Navbar;
