import { Link, Outlet } from 'react-router-dom';
// Import Link for navigation and Outlet for rendering child routes
// type Props = {
//   onNavigate: (page: string) => void;
// };
// export function Header({ onNavigate }: Props) {

export function Header() {
  return (
    <div>
      <nav className="px-4 text-white bg-gray-900">
        <ul>
          <li className="inline-block py-2 px-4">
            {/* <div onClick={() => onNavigate('about')} className="text-white">
              About
            </div> */}
            {/* Converted About link:
              1. Replaced div with Link component
              2. Changed onClick to 'to' prop pointing to "/about"
              3. Removed manual navigation handler
            */}
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
          <li className="inline-block py-2 px-4">
            {/*
              Converted Dashboard link:
              1. Replaced div with Link component
              2. Set 'to' prop to "/" for the dashboard (root route)
              3. Removed manual navigation handler
            */}
            <Link to="/" className="text-white">
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
      {/* Page content goes here */}
      <Outlet />
      {/*
        Outlet component:
        - This is where child route components (Dashboard, About, Details, etc.)
          will be rendered when their routes match
        - Essential for nested routing to work properly
      */}
      {/* children for nested routes  */}
    </div>
  );
}
