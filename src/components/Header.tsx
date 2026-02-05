import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-aircraft-blue text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={`${import.meta.env.BASE_URL}airplane.svg`}
              alt="Aircraft Scanner" 
              className="h-8 w-8"
            />
            <span className="text-xl font-bold">Aircraft Parts Scanner</span>
          </Link>

          <nav className="flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/') 
                  ? 'bg-white/20 text-white' 
                  : 'hover:bg-white/10'
              }`}
            >
              Scan
            </Link>
            <Link
              to="/parts"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/parts') 
                  ? 'bg-white/20 text-white' 
                  : 'hover:bg-white/10'
              }`}
            >
              Parts
            </Link>
            <Link
              to="/categories"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/categories') 
                  ? 'bg-white/20 text-white' 
                  : 'hover:bg-white/10'
              }`}
            >
              Categories
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
