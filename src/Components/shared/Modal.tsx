"use client";

import { CircleX } from "lucide-react";
import { ReactNode, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  children,
  openModal,
}: {
  children: ReactNode;
  openModal: () => void;
}) {
  const modalRef = useRef(null);
  return createPortal(
    <div
      className="w-screen h-screen absolute z-999 top-0 left-0 backdrop-blur-sm"
      ref={modalRef}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-150 w-200 bg-background/60 p-6 rounded-xl shadow-xl border-2 border-primary">
        <CircleX
          className="absolute right-2 top-2 text-primary "
          onClick={() => openModal()}
        />
        {children}
      </div>
    </div>,
    document.body,
  );
}
