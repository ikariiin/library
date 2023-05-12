export function Header() {
  return (
    <header className="flex justify-between items-center col-span-2 p-2 mb-2">
      <div className="text-4xl font-thin text-blue-800">Library</div>
      <div className="grow flex items-center justify-center">
        <input
          type="text"
          className="w-1/2 font-serif p-2 border-2 border-gray-300 rounded-md outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-25 transition-all duration-100 ease-in-out"
          placeholder="Search your library..."
        />
      </div>
    </header>
  );
}
