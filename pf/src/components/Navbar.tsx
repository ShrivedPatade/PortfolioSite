import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex justify-center pt-6">
      <nav
        className="flex items-center gap-x-8 rounded-full px-6 py-3 text-lg font-medium shadow-xl backdrop-blur-md"
        style={{
          backgroundColor: 'rgba(228, 217, 255, 0.8)', // periwinkle with 80% opacity
          color: 'var(--space-cadet)',
        }}
      >
        <Link href="/" className="hover:text-orange-web transition-colors">
          About Me
        </Link>
        <Link href="/projects" className="hover:text-orange-web transition-colors">
          Projects
        </Link>
        {/* Updated Link */}
        <Link href="/achievements" className="hover:text-orange-web transition-colors">
          My Achievements
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;