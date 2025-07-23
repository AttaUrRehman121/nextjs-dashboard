import '@/app/ui/global.css';
import { RobotoFont } from '@/app/ui/fonts';

export const experimental_ppr = true;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className={`${RobotoFont.className}`}>{children}</body>
    </html>
  );
}
