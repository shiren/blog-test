//import DefaultLayout from '@/app/_components/defaultLayout';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  //return <DefaultLayout>{children}</DefaultLayout>;
  //
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
