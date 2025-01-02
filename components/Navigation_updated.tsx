'use client';

import styles from '@components/Navigation.module.scss';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import ModalTrigger from '@components/ModalTrigger';
import ActionButton from '@components/ActionButton';
import ModalCreateAccount from '@components/modals/ModalCreateAccount';

interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  logoHref?: string;
  logoTarget?: React.HTMLAttributeAnchorTarget;
  onClickLogo?: React.MouseEventHandler<HTMLButtonElement>;
  logo?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  logoRightAligned?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ children, logoHref, logoTarget, onClickLogo, logo, left, right, logoRightAligned = false }) => {
  const pathname = usePathname();

  const renderModals = () => {
    switch (pathname) {
      case '/':
        return (
          <>
            <ModalTrigger modal={ModalCreateAccount}>
              <ActionButton>GO TO MAP</ActionButton>
            </ModalTrigger>
            <ModalTrigger modal={ModalCreateAccount}>
              <ActionButton>SIGN IN</ActionButton>
            </ModalTrigger>
          </>
        );
      case '/faqs':
        return (
          <>
            <ModalTrigger modal={ModalCreateAccount}>
              <ActionButton>GO BACK</ActionButton>
            </ModalTrigger>
            <ModalTrigger modal={ModalCreateAccount}>
              <ActionButton>GO TO MAP</ActionButton>
            </ModalTrigger>
            <ModalTrigger modal={ModalCreateAccount}>
              <ActionButton>SIGN IN</ActionButton>
            </ModalTrigger>
          </>
        );
      // Add more cases for different routes as needed
      default:
        return null;
    }
  };

  let logoElement = <button className={styles.logo}>{logo}</button>;

  if (onClickLogo) {
    logoElement = (
      <button className={styles.logo} onClick={onClickLogo}>
        {logo}
      </button>
    );
  }

  if (logoHref) {
    logoElement = (
      <a href={logoHref} className={styles.logo} target={logoTarget}>
        {logo}
      </a>
    );
  }

  return (
    <nav className={styles.root} style={{ background: logoRightAligned ? 'var(--theme-background)' : 'transparent' }}>
      {!logoRightAligned && logoElement}
      <section className={styles.left}>{left}</section>
      <section className={styles.children}>{children}</section>
      {logoRightAligned && logoElement}
      <section className={styles.right}>{renderModals()}</section>
    </nav>
  );
};

export default Navigation;
