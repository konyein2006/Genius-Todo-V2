export function Navbar({
  handleTheme,
  inputRef,
  handleSearchInput,
  handleSearching,
  searchText,
}) {
  return (
    <div className="flex justify-between items-center px-3 md:px-5 lg:px-8 border-b border-b-zinc-200 dark:border-b-zinc-700 h-[10%]">
      <div className="relative">
        <i className="fa-solid fa-magnifying-glass absolute right-3 -translate-y-1/2 top-1/2 text-xs md:text-sm cursor-pointer"></i>
        <input
          className="bg-zinc-100 dark:bg-zinc-700 px-3 py-2 lg:py-3 rounded-lg placeholder:text-zinc-950 dark:placeholder:text-zinc-100 text-sm sm:text-md outline-0"
          type="text"
          placeholder="Search todo..."
          value={searchText}
          onChange={handleSearchInput}
          onKeyDown={handleSearching}
        />
      </div>
      <div className="flex items-center gap-3 lg:gap-5">
        <button
          onClick={() => {
            inputRef.current.focus();
          }}
          className="bg-zinc-900 dark:bg-zinc-100 rounded-lg px-3 py-2 lg:py-3 text-zinc-100 dark:text-zinc-900 flex gap-2 items-center cursor-pointer hover:bg-zinc-700 dark:hover:bg-zinc-200 duration-300 text-sm sm:text-md"
          title="Add Todo"
        >
          <i className="fa-solid fa-plus "></i>
          <p className="hidden md:block">Add new task</p>
        </button>
        <button
          className="py-1 w-10 md:w-11  h-5 md:h-6 rounded-xl bg-zinc-700 dark:bg-zinc-100 relative cursor-pointer"
          onClick={handleTheme}
        >
          <p className="w-4 md:w-5 h-4 md:h-5  rounded-full bg-zinc-100 dark:bg-zinc-900 absolute -translate-y-1/2 dark:-translate-x-1/2 right-1 dark:left-3"></p>
        </button>
      </div>
    </div>
  );
}
