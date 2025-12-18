// src/components/Modal.tsx
import { ReactNode } from 'react';

export default function Modal({ children, open = false, onClose }: { children: ReactNode; open?: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-50 w-full max-w-xl p-4 bg-white rounded shadow dark:bg-gray-800">{children}</div>
    </div>
  );
}