import { getServerSession } from 'next-auth';
import Header from './components/Header';
import './globals.css';
import Provider from './components/Provider';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <head />
      <body>
        <Provider>
          <Header session={session} />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
