import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./components/Home";
import { useEffect, useState, useRef } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("v2-theme");

    const isDark =
      savedTheme === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDark) {
      document.documentElement.classList.add("dark");
      return "dark";
    } else {
      document.documentElement.classList.remove("dark");
      return "light";
    }
  });

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("v2-todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("v2-todos", JSON.stringify(todos));
  }, [todos]);

  function handleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("v2-theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }

  function handleInput(e) {
    const text = e.target.value;
    if (!text.trim()) return;
    setInputText(text);
  }

  function handleAddTodo() {
    if (!inputText.trim()) return;
    const newTodo = {
      id: crypto.randomUUID(),
      task: inputText,
      complete: false,
      favorite: false,
      date: dayjs(),
    };
    setTodos(() => [...todos, newTodo]);
    setInputText("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleAddTodo();
      e.target.blur();
    }
  }

  function handleComplete(id) {
    setTodos((pre) =>
      pre.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo,
      ),
    );
  }

  function handleFavorite(id) {
    setTodos((pre) =>
      pre.map((todo) =>
        todo.id === id ? { ...todo, favorite: !todo.favorite } : todo,
      ),
    );
  }

  function handleDelete(id) {
    setTodos((pre) => pre.filter((todo) => todo.id !== id && todo));
  }

  function handleCorrection(id) {
    const targetTodo = todos.find((todo) => todo.id === id && todo);
    if (!targetTodo) return;
    setInputText(targetTodo.task);
    handleDelete(id);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  function handleSearchInput(e) {
    const search = e.target.value;
    if (!search.trim()) return;
    setSearchText(search);
  }

  function handleSearching(e) {
    if (e.key === "Enter") {
      navigate(`/tasks?search=${searchText}`);
      setSearchText("");
    }
  }

  return (
    <div className="h-dvh flex bg-white dark:bg-black text-black dark:text-white ">
      <Sidebar theme={theme} />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Navbar
          handleTheme={handleTheme}
          inputRef={inputRef}
          searchText={searchText}
          handleSearchInput={handleSearchInput}
          handleSearching={handleSearching}
        />

        <Home
          todos={todos}
          inputRef={inputRef}
          inputText={inputText}
          handleInput={handleInput}
          handleAddTodo={handleAddTodo}
          handleKeyDown={handleKeyDown}
          handleComplete={handleComplete}
          handleFavorite={handleFavorite}
          handleDelete={handleDelete}
          handleCorrection={handleCorrection}
        />
      </div>
    </div>
  );
}

export default App;
