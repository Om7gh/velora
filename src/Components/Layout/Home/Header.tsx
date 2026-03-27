'use client';

import Modal from '@/Components/shared/Modal';
import { useState } from 'react';
import { Menu } from './Menu';
import { Button } from '@/Components/ui/Button';
import { Logo } from '@/Components/shared/Logo';
import { LoginForm } from '../auth/SignUp';

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
