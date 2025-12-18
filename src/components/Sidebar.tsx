import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Users as UsersIcon, BarChart2, Settings, LogOut, X, Briefcase } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

type Props = {
  open?: boolean;
  onClose?: () => void;
};

const Sidebar = ({ open = false, onClose }: Props) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
    onClose?.();
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 px-4 py-8 overflow-y-auto bg-white border-r dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-200 md:static md:translate-x-0 md:h-screen ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
      aria-hidden={!open}
    >
      {/* Close button (mobile) */}
      <div className="md:hidden absolute top-3 right-3">
        <button onClick={onClose} className="p-2 rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
          <X className="w-5 h-5" />
        </button>
      </div>

      <a href="#" className="mx-auto mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Controlly</h1>
      </a>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-gray-700 rounded-md dark:text-gray-200 ${
                isActive ? 'bg-gray-200 dark:bg-gray-700' : ''
              }`
            }
            onClick={onClose}
          >
            <Home className="w-5 h-5" />
            <span className="mx-4 font-medium">Dashboard</span>
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 text-gray-700 rounded-md dark:text-gray-200 ${
                isActive ? 'bg-gray-200 dark:bg-gray-700' : ''
              }`
            }
            onClick={onClose}
          >
            <UsersIcon className="w-5 h-5" />
            <span className="mx-4 font-medium">Staff</span>
          </NavLink>

          <NavLink
            to="/customers"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 text-gray-700 rounded-md dark:text-gray-200 ${
                isActive ? 'bg-gray-200 dark:bg-gray-700' : ''
              }`
            }
            onClick={onClose}
          >
            <Briefcase className="w-5 h-5" />
            <span className="mx-4 font-medium">Customers</span>
          </NavLink>

          <NavLink
            to="/insights"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 text-gray-700 rounded-md dark:text-gray-200 ${
                isActive ? 'bg-gray-200 dark:bg-gray-700' : ''
              }`
            }
            onClick={onClose}
          >
            <BarChart2 className="w-5 h-5" />
            <span className="mx-4 font-medium">Insights</span>
          </NavLink>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 text-gray-700 rounded-md dark:text-gray-200 ${
                isActive ? 'bg-gray-200 dark:bg-gray-700' : ''
              }`
            }
            onClick={onClose}
          >
            <Settings className="w-5 h-5" />
            <span className="mx-4 font-medium">Pricing</span>
          </NavLink>
        </nav>

        <div className="mt-6">
          <button onClick={handleLogout} className="flex items-center w-full px-4 py-2 mt-5 text-gray-700 rounded-md dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">
            <LogOut className="w-5 h-5" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
