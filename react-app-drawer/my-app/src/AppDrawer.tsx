import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import './AppDrawer.css';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};

export function AppDrawer({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex w-full">
      <div className={`menu-drawer ${isOpen ? 'is-open' : ''}`}>
        <FaBars className="menu-icon" onClick={handleToggle} />
        {isOpen && <h3 className="menu-heading">Hylian Shopping</h3>}
        <ul className="menu-items">
          {menuItems.map((item) => (
            <li key={item.name} className="menu-item">
              <NavLink to={item.path} className="menu-link">
                <img src={item.iconUrl} className="item-icon" />
                {isOpen && item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}
