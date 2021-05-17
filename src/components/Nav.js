const Navbar = () => {
  return (
    <div className="flex justify-between w-screen py-5 px-7">
      <div className="logo-cont">
        <span className="log text-4xl">QuoteSqr</span>
      </div>
      <div class="icons-cont flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mx-4 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mx-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
