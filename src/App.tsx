import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ScannerPage } from './pages/ScannerPage';
import { PartsPage } from './pages/PartsPage';
import { PartPage } from './pages/PartPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { CategoryPage } from './pages/CategoryPage';
import { GeneratorPage } from './pages/GeneratorPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ScannerPage />} />
          <Route path="/parts" element={<PartsPage />} />
          <Route path="/part/:partId" element={<PartPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/generate" element={<GeneratorPage />} />
        </Routes>
      </main>
      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>Aircraft Parts Scanner - For Maintenance Personnel</p>
          <p className="mt-1">Always verify information with official documentation</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
