'use client';

import Modal from '@/Components/shared/Modal';
import { useState } from 'react';
import { Menu } from './Menu';
import { Button } from '@/Components/ui/Button';
import { Logo } from '@/Components/shared/Logo';
import { SignUpMethod } from '../LoginForm';

export function Header() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <header className="flex items-center justify-between my-8 px-20">
      {openModal && (
        <Modal openModal={() => setOpenModal(false)}>
          <LoginForm />
        </Modal>
      )}
      <Logo />
      <Menu />
      <Button
        type="primary"
        label="get velora for free"
        onClick={() => setOpenModal(true)}
      />
    </header>
  );
}

function LoginForm() {
  return (
    <div className="flex flex-col  justify-center h-full gap-10 w-full">
      <div className="m-auto">
        <Logo />
      </div>
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-semibold">Velora Welcome You !</h2>
        <span className="text-sm ">Sign Up from here</span>
      </div>
      <div className="space-y-4">
        <SignUpMethod method="google" link="" />
        <SignUpMethod method="github" link="" />
        <SignUpMethod method="discord" link="" />
      </div>
    </div>
  );
}
