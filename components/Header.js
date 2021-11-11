import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-gray-800 text-white font-bold">
      <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <ul className="relative flex items-center justify-between h-16">
          <li><Link href="/" passHref={true}>
            <div className="bg-black border-2  rounded-full p-1">TD</div>
          </Link></li>
          <li><Link href="#mission">Mission</Link></li>
          <li><Link href="#projects">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
}
