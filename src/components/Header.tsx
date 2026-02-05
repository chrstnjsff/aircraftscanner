import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Scan' },
    { path: '/parts', label: 'Parts' },
    { path: '/categories', label: 'Categories' },
    { path: '/generate', label: 'Generate QR' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-aircraft-blue text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <img 
              src={`${import.meta.env.BASE_URL}airplane.svg`}
              alt="Aircraft Scanner" 
              className="h-7 w-7"
            />
            <span className="text-lg font-bold hidden sm:inline">Aircraft Parts Scanner</span>
            <span className="text-lg font-bold sm:hidden">APS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg transition-colors text-sm ${
                  isActive(link.path) 
                    ? 'bg-white/20 text-white' 
                    : 'hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-white/20 pt-2">
            <div className="flex flex-col space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    isActive(link.path) 
                      ? 'bg-white/20 text-white' 
                      : 'hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
