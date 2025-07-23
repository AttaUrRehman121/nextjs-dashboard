import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { Inter } from 'next/font/google';

const robotoMono = Inter({
  subsets: ['latin'],
  weight: ['400'],
});
export default function AcmeLogo() {
  return (
    <div
      className={` flex flex-row items-center leading-none text-white ${robotoMono.className}`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
