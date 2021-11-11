
export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-gray-800 text-white font-bold">
      <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <ul className="relative flex items-center justify-between h-16">
          <li><a href="./">
            <div className="bg-black border-2  rounded-full p-1">TD</div>
          </a></li>
          <li><a href="#mission">Mission</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}
