import Input from "./Input";
import TodayTasks from "./pages/TodayTasks";
import Favorite from "./pages/Favorite";
import Tasks from "./pages/Tasks";
import { Route, Routes } from "react-router-dom";

export function Home({
  inputText,
  inputRef,
  handleInput,
  handleAddTodo,
  handleKeyDown,
  handleComplete,
  handleFavorite,
  handleDelete,
  handleCorrection,
  todos,
  searchTodos,
}) {
  return (
    <div className="p-3 sm:p-4 md:p-5 lg:p-6 max-w-3xl mx-auto flex flex-col justify-between h-[90%] gap-5">
      <Routes>
        <Route
          path="/"
          element={
            <TodayTasks
              todos={todos}
              handleComplete={handleComplete}
              handleFavorite={handleFavorite}
              handleDelete={handleDelete}
              handleCorrection={handleCorrection}
            />
          }
        />
        <Route
          path="/favorite"
          element={
            <Favorite
              todos={todos}
              handleComplete={handleComplete}
              handleFavorite={handleFavorite}
              handleDelete={handleDelete}
              handleCorrection={handleCorrection}
            />
          }
        />
        <Route
          path="/tasks"
          element={
            <Tasks
              todos={todos}
              handleComplete={handleComplete}
              handleFavorite={handleFavorite}
              handleDelete={handleDelete}
              handleCorrection={handleCorrection}
              searchTodos={searchTodos}
            />
          }
        />
      </Routes>
      <Input
        inputText={inputText}
        handleInput={handleInput}
        inputRef={inputRef}
        handleKeyDown={handleKeyDown}
        handleAddTodo={handleAddTodo}
      />
    </div>
  );
}
