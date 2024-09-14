'use client';

import React from "react";
import HomeIcon from "./icon/home";
import LocalOfferIcon from "./icon/local-offer";
import RestoreIcon from "./icon/restore";
import AccountCircleIcon from "./icon/account-circle";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import InfoIcon from "./icon/info";

const BottomNav = () => {
  const pathname = usePathname();
  const isShowed = !pathname.startsWith(`/programs/`) && !pathname.startsWith(`/histories/`) && !pathname.startsWith(`/zakat/`);
  return (
    isShowed && (
    <div className="fixed bottom-0 w-full bg-white shadow-lg max-w-[480px] mx-auto left-0 right-0">
      <div className="flex justify-around items-center py-3">
        <Link href="/" className="flex flex-col items-center justify-center" passHref>
            <div className={clsx("px-4 py-1 rounded-lg", { 'bg-green-200': pathname === '/' })}>
              <HomeIcon className={clsx("h-6 w-6", { 'text-green-700': pathname === '/', 'text-gray-700': pathname !== '/' })} />
            </div>
            <span className={clsx("text-xs", { 'text-green-700': pathname === '/', 'text-gray-700': pathname !== '/' })}>Beranda</span>
        </Link>
        <Link href="/programs" className="flex flex-col items-center justify-center" passHref>
          <div className={clsx("px-4 py-1 rounded-lg", { 'bg-green-200': pathname === '/programs' })}>
            <LocalOfferIcon className={clsx("h-6 w-6", { 'text-green-700': pathname === '/programs', 'text-gray-700': pathname !== '/programs' })} />
          </div>
          <span className={clsx("text-xs", { 'text-green-700': pathname === '/programs', 'text-gray-700': pathname !== '/programs' })}>Program</span>
        </Link>
        <Link href="/profiles" className="flex flex-col items-center justify-center" passHref>
          <div className={clsx("px-4 py-1 rounded-lg", { 'bg-green-200': pathname === '/profiles' })}>
            <AccountCircleIcon className={clsx("h-6 w-6", { 'text-green-700': pathname === '/profiles', 'text-gray-700': pathname !== '/profiles' })} />
          </div>
          <span className={clsx("text-xs", { 'text-green-700': pathname === '/profiles', 'text-gray-700': pathname !== '/profiles' })}>Akun</span>
        </Link>
        <Link href="/histories" className="flex flex-col items-center justify-center" passHref>
          <div className={clsx("px-4 py-1 rounded-lg", { 'bg-green-200': pathname === '/histories' })}>
            <RestoreIcon className={clsx("h-6 w-6", { 'text-green-700': pathname === '/histories', 'text-gray-700': pathname !== '/histories' })} />
          </div>
          <span className={clsx("text-xs", { 'text-green-700': pathname === '/histories', 'text-gray-700': pathname !== '/histories' })}>Riwayat</span>
        </Link>
        <Link href="https://kitapeduli.id" className="flex flex-col items-center justify-center" passHref>
          <div className={"px-4 py-1 rounded-lg"}>
            <InfoIcon className={"h-6 w-6text-gray-700"} />
          </div>
          <span className={"text-xs text-gray-700"}>Company</span>
        </Link>
      </div>
    </div>
  ));
};

export default BottomNav;
