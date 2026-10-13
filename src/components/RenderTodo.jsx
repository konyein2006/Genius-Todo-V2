import dayjs from "dayjs";
import {
  FaRegStar,
  FaStar,
  FaTrash,
  FaRegCircle,
  FaCheckCircle,
} from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";

export default function RenderTodo({
  todo,
  handleComplete,
  handleFavorite,
  handleDelete,
  handleCorrection,
}) {
  return (
    <div className="flex justify-between items-center gap-3 sm:gap-4 md:gap-5 border border-zinc-500 rounded-xl px-3 sm:px-4 md:px-5 py-3 sm:py-4 my-5 hover:shadow-xl w-full">
      <button onClick={() => handleComplete(todo.id)}>
        {todo.complete ? (
          <FaCheckCircle />
        ) : (
          <FaRegCircle className="text-zinc-900 dark:text-zinc-100 cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl" />
        )}
      </button>
      <div className="flex-1 flex flex-col gap-1">
        <p
          className={` text-sm sm:text-base md:text-lg  font-bold ${todo.complete ? "line-through decoration-2" : ""} `}
        >
          {todo.task}
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          {dayjs(todo.date).format("HH:mm dddd DD/MMM")}
        </p>
      </div>
      <div className="flex gap-2 sm:gap-3 md:gap-4">
        <button onClick={() => handleFavorite(todo.id)}>
          {todo.favorite ? (
            <FaStar className="text-pink-400 cursor-pointer text-base sm:text-lg md:text-xl lg-text-2xl" />
          ) : (
            <FaRegStar className="text-zinc-900 dark:text-zinc-100 cursor-pointer text-base sm:text-lg md:text-xl lg-text-2xl" />
          )}
        </button>
        <button onClick={() => handleCorrection(todo.id)}>
          <FaPenToSquare className="text-zinc-900 dark:text-zinc-100 cursor-pointer text-base sm:text-lg md:text-xl lg-text-2xl hover:text-blue-400" />
        </button>
        <button onClick={() => handleDelete(todo.id)}>
          <FaTrash className="text-zinc-900 dark:text-zinc-100 cursor-pointer text-base sm:text-lg md:text-xl lg-text-2xl hover:text-red-600" />
        </button>
      </div>
    </div>
  );
}
