import {toggleDarkMode} from '../helper/index'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center dark:bg-gray-700 w-full p-4 bg-white">
      <div className="logo-cont">
        <span className="log text-4xl dark:text-gray-100">QuoteSqr</span>
      </div>
      <div class="icons-cont flex">
        <span className="p-2 cursor-pointer dark-theme" id="switchTheme" onClick={toggleDarkMode}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 dark:text-gray-100 text-gray-600 dark:hover:text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </span>
        <span className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 hover:text-red-500 text-gray-600 cursor-pointer"
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
        </span>
        <span className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 hover:text-blue-500 text-gray-600 cursor-pointer"
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
        </span>
      </div>
    </div>
  );
};

export default Navbar;
