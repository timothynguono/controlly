import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useState } from 'react';

const MainLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar open={open} onClose={() => setOpen(false)} />

      {/* Overlay for mobile when sidebar is open */}
      {open && <div className="fixed inset-0 z-40 md:hidden bg-black/40" onClick={() => setOpen(false)} />}

      <div className="flex flex-col flex-1">
        <Header onMenuToggle={() => setOpen(true)} />
        <main className="h-full p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
