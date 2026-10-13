import { useSearchParams } from "react-router-dom";
import RenderTodo from "../RenderTodo";

export default function Tasks({
  handleComplete,
  handleFavorite,
  handleDelete,
  handleCorrection,
  todos,
}) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search") || "";
  console.log(query);
  const searchTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(query.toLowerCase()),
  );
  console.log(searchTodos);
  let filterTodos = searchTodos ? searchTodos : todos;
  console.log(filterTodos);
  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className=" font-semibold flex items-center gap-5">
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl">
          {query ? `Search: ${query}` : `All Todo`}
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-md  bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 px-3 py-2 sm:py-1 rounded-full">
          {filterTodos.length}
        </p>
      </div>
      <div className="flex-1 overflow-auto scrollbar-none">
        {filterTodos.length > 0 ? (
          filterTodos.map((todo) => {
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
    </div>
  );
}
