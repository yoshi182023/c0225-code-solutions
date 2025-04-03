import { About } from './pages/About';
import { Dashboard } from './pages/Dashboard';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';
import { Route, Routes } from 'react-router-dom';

export function App() {
  // const [page, setPage] = useState('dashboard');
  // const [itemId, setItemId] = useState<number>();

  // function handleDetails(itemId: number): void {
  //   setPage('details');
  //   setItemId(itemId);
  // }

  {
    /* always rendering header */
  }
  {
    /* <Header onNavigate={(page) => setPage(page)} />
      {page === 'dashboard' && <Dashboard onDetails={handleDetails} />}
      {page === 'details' && (
        <Details itemId={itemId} onDone={() => setPage('dashboard')} />
      )}
      {page === 'about' && <About />}
      {page === undefined && <NotFound onDone={() => setPage('dashboard')} />} */
  }
  //return{' '}
  return (
    // Routes component acts as a container for all individual routes
    <Routes>
      {/*
        Parent route that:1. Matches the root path ("/") 2. Always renders the Header component
        3. Provides an Outlet (placeholder) for child routes to render within Header
      */}
      <Route path="/" element={<Header />}>
        {/* Index route:
          1. Renders when URL exactly matches parent route ("/") 2. Shows Dashboard as the default/main page
        */}
        <Route index element={<Dashboard />} />
        <Route path="about" element={<About />} />
        {/*
          Details page route with parameter:
          1. Renders when URL matches pattern "/details/:itemId"
          2. :itemId becomes a URL parameter that can be accessed in Details component
          3. Shows the Details component
        */}
        <Route path="details/:itemId" element={<Details />} />
        <Route path="*" element={<NotFound />} />
        {/* Add a route for '*' that matches everything else and renders the
        NotFound component. */}
      </Route>
    </Routes>
  );
}
