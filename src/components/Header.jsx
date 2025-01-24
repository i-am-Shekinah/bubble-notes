import { FaSearch } from 'react-icons/fa';

import settings from '../assets/icons/settings.png';

function Header() {
  return (
    <header className="lg:flex items-center justify-between pb-5 lg:border-b-1">
      <div className="flex justify-between items-center">
        <h1 className="h1">All Notes</h1>
        <a href="#" className="inline-block lg:hidden">
          <img src={settings} alt="settings icon" className="w-4 h-4" />
        </a>
      </div>

      <div className="relative flex gap-4 items-center mt-4 lg:mt-0">
        <input
          type="text"
          placeholder="Search by title, content, or tags..."
          aria-label="search for notes by title, content, or tags..."
          className="border-1 px-4 pl-9 py-2 rounded-lg w-full lg:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute left-3 text-gray-300" />
        <a href="#" className="hidden lg:inline-block">
          <img src={settings} alt="settings icon" className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

export default Header;
