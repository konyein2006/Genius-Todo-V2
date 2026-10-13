import RenderTodo from "../RenderTodo";

export default function Favorite({
  handleComplete,
  handleFavorite,
  handleDelete,
  handleCorrection,
  todos,
}) {
  const favoriteTodos = todos.filter((todo) => todo.favorite);
  console.log(favoriteTodos);
  return (
    <>
      <div className=" font-semibold flex items-center gap-5">
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl">
          Favorite Tasks
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-md  bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 px-3 py-2 sm:py-1 rounded-full">
          {favoriteTodos.length}
        </p>
      </div>
      <div className="flex-1 overflow-auto scrollbar-none">
        {favoriteTodos.length > 0 ? (
          favoriteTodos.map((todo) => {
            return (
              <RenderTodo
                key={todo.id}
                todo={todo}
                handleComplete={handleComplete}
                handleFavorite={handleFavorite}
                handleDelete={handleDelete}
                handleCorrection={handleCorrection}
              />
            );
          })
        ) : (
          <div className="mt-5">Please add new todo.</div>
        )}
      </div>
    </>
  );
}
