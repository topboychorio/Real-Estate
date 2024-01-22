import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center p-3 mx-auto max-w-6xl">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <Link to="/">
            <span className="text-slate-700">Chorio</span>
            <span className="text-slate-500">Estate</span>
          </Link>
        </h1>

        <form className="bg-slate-100 p-3 rounded-lg flex items-center w-24 sm:w-64">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <li>
            <Link
              to="/"
              className="text-slate-700 hover:underline cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-slate-700 hover:underline cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link to="/profile">
              {currentUser ? (
                <img
                  className="rounded-full h-7 w-7 object-cover"
                  src={currentUser.avatar}
                  alt="profile"
                />
              ) : (
                <span className="text-slate-700 hover:underline"> Sign in</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
