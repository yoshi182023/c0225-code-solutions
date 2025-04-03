import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import './App.css';
import { Header } from './Header';
import { Dashboard } from './pages/Dashboard';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';

function App() {
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
        <Route path="details/:productId" element={<Details />} />
        <Route path="*" element={<NotFound />} />
        {/* Add a route for '*' that matches everything else and renders the
        NotFound component. */}
      </Route>
    </Routes>
  );
}

export default App;
