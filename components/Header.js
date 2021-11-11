
export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-gray-800 text-white font-bold">
      <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <ul className="relative flex items-center justify-between h-16 overflow-hidden">
          <li><a href="./">
            <div className="bg-black border-2 rounded-full p-2">TD</div>
          </a></li>
          <li>
            <ul className="flex items-center justify-start">
              <li>
                <a href="#mission" className="p-2 sm:p-6 lg:p-8 hover:bg-gray-700">Mission</a>
              </li>
              <li>
                <a href="#projects" className="p-2 sm:p-6 lg:p-8 hover:bg-gray-700">Projects</a>
              </li>
            </ul>
          </li>

        </ul>
      </nav>
    </header>
  );
}
