'use client';

import { CircleX } from 'lucide-react';
import { ReactNode, useRef } from 'react';

export default function Modal({
  children,
  openModal,
}: {
  children: ReactNode;
  openModal: () => void;
}) {
  const modalRef = useRef(null);
  return (
    <div
      className="w-screen h-screen absolute top-0 left-0 backdrop-blur-xs"
      ref={modalRef}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-h-96 max-h-full min-w-96 max-w-full bg-surface p-6 rounded-xl shadow-xl">
        <CircleX
          className="absolute right-2 top-2 text-primary "
          onClick={() => openModal()}
        />
        {children}
      </div>
    </div>
  );
}
