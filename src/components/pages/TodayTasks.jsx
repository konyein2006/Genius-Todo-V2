import dayjs from "dayjs";
import RenderTodo from "../RenderTodo";

export default function TodayTasks({
  handleComplete,
  handleFavorite,
  handleDelete,
  handleCorrection,
  todos,
}) {
  const todayTodos = todos.filter((todo) =>
    dayjs(todo.date).isSame(dayjs(), "day"),
  );
  console.log(todayTodos);
  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className=" font-semibold flex items-center gap-5">
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl">
          Today Tasks
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-md  bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 px-3 py-2 sm:py-1 rounded-full">
          {todayTodos.length}
        </p>
      </div>
      <div className="flex-1 overflow-auto scrollbar-none">
        {todayTodos.length > 0 ? (
          todayTodos.map((todo) => {
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
