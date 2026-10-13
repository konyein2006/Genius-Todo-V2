export default function Input({
  inputText,
  handleInput,
  handleAddTodo,
  handleKeyDown,
  inputRef,
}) {
  return (
    <div className="flex gap-3 md:gap-5 max-w-2xl w-full mx-auto">
      <input
        value={inputText}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        type="text"
        placeholder="Add new tasks..."
        className="border flex-1 rounded-lg placeholder:text-zinc-900 dark:placeholder:text-zinc-100 px-3
      "
      />
      <button
        onClick={handleAddTodo}
        className="bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 px-3 py-2 rounded-lg "
      >
        Add <span className="hidden sm:block">Todo</span>
      </button>
    </div>
  );
}
