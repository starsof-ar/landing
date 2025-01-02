import Providers from '@components/Providers';
import Navigation from '@components/Navigation_updated';
import ModalTrigger from '@components/ModalTrigger';
import ActionButton from '@components/ActionButton';
import ModalCreateAccount from '@components/modals/ModalCreateAccount';
import DefaultLayout from '@root/components/page/DefaultLayout';
import { Suspense } from 'react';
import DebugGrid from '@components/DebugGrid';
import DefaultActionBar from '@components/page/DefaultActionBar';
import Link from 'next/link';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-us">
      <body className="theme-dark">
        <Providers>
          <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
            <Suspense fallback={<div>Loading...</div>}>
              <br />
              <Navigation
                logo="✶"
                logoRightAligned={true}
                right={
                  <>
                    <ModalTrigger modal={ModalCreateAccount}>
                      <ActionButton>GO TO MAP</ActionButton>
                    </ModalTrigger>
                    <ModalTrigger modal={ModalCreateAccount}>
                      <ActionButton>SIGN IN</ActionButton>
                    </ModalTrigger>
                  </>
                }
              />
              <DebugGrid /> {/* This is the grid that shows the layout of the page */}
              <DefaultActionBar />
              {children}
            </Suspense>
          </DefaultLayout>
        </Providers>
      </body>
    </html>
  );
}
