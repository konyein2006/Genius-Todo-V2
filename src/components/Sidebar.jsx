import { NavLink, Link } from "react-router-dom";
import Glogo from "../assets/fancy-letter-g-icon.svg";

export function Sidebar({ theme }) {
  return (
    <div className="flex flex-col border-r border-r-zinc-200 dark:border-r-zinc-800 w-[20%] sm:w-[25%] md:w-[23%] lg:w-[20%] h-full  px-3 sm:px-3 md:px-4 lg:px-5">
      <Link to="/" className={`flex justify-center items-center my-5 `}>
        <img
          src={Glogo}
          alt="logo"
          className={`w-10 h-auto sm:hidden hover ${theme === "dark" ? "svg-white" : ""}`}
        />
        <h1 className="hidden sm:block font-bold text-md sm:text-lg md:text-xl lg:text-2xl hover:text-amber-400  text-zinc-950 dark:text-zinc-100 duration-200">
          Genius Todo
        </h1>
      </Link>

      <div className="my-2 flex flex-col items-center sm:items-start justify-center">
        <NavLink
          to="/"
          className={({ isActive }) => `
    flex gap-5 items-center my-3 sm:my-0
    p-3 rounded-xl duration-200 group w-full 
    ${
      isActive
        ? "bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900"
        : "text-zinc-700 dark:text-zinc-200 hover:text-orange-400 dark:hover:text-amber-400"
    }
  `}
        >
          <i className="fa-solid fa-house-chimney mx-auto sm:mx-0  text-2xl sm:text-xl"></i>
          <div className="hidden sm:block text-md md:text-lg lg:text-xl font-semibold">
            <p>Home</p>
          </div>
        </NavLink>
        <NavLink
          to="/favorite"
          className={({ isActive }) => `
    flex gap-5 items-center my-3 sm:my-0
    p-3 rounded-xl duration-200 group w-full 
    ${
      isActive
        ? "bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900"
        : "text-zinc-700 dark:text-zinc-200 hover:text-orange-400 dark:hover:text-amber-400"
    }
  `}
        >
          <i className="fa-solid fa-star mx-auto sm:mx-0  text-2xl sm:text-xl "></i>
          <div className="hidden sm:block text-md md:text-lg lg:text-xl font-semibold">
            <p>Favorite</p>
          </div>
        </NavLink>
        <NavLink
          to="/tasks"
          className={({ isActive }) => `
    flex gap-5 items-center my-3 sm:my-0
    p-3 rounded-xl duration-200 group w-full 
    ${
      isActive
        ? "bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900"
        : "text-zinc-700 dark:text-zinc-200 hover:text-orange-400 dark:hover:text-amber-400"
    }
  `}
        >
          <i className="fa-solid fa-list mx-auto sm:mx-0  text-2xl sm:text-xl "></i>
          <div className="hidden sm:inline-block text-md md:text-lg lg:text-xl font-semibold">
            <p>Tasks</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
