'use client';

import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import ClearIcon from "./icon/clear-icon";

const AppBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const initialSearchQuery = searchParams.get('search');
    const isShowed = !pathname.startsWith(`/programs/`) && !pathname.startsWith(`/histories/`) && pathname != '/histories' && pathname != '/profiles';
    const router = useRouter();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    };
    
    const handleOnClick = () => {
      if(pathname == '/') {
        router.push('/programs')
        return 0;
      }
    }

    const handleSearchSubmit = () => {
      if (searchQuery.trim()) {
        router.push(`programs?page=1&search=${encodeURIComponent(searchQuery)}`);
      }
    }

    const clearSearch = () => {
      router.push(window.location.pathname);
    }

    return (
        isShowed && (
        <div className="flex justify-between items-center p-5 bg-white">
            <div>
              <Image
                src="https://kitapeduli.id/img/front/Logo.png"
                alt="Example Image"
                width={150}
                height={0}
                style={{height: "auto"}}
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-lg">
              <input
                onClick={handleOnClick}
                onChange={handleSearchChange}
                type="text"
                className="flex-grow p-2 px-4 w-48 border-transparent bg-transparent text-xs focus:outline-none"
                placeholder="Cari Program"
              />

              {
                (initialSearchQuery && <button onClick={clearSearch}>
                  <ClearIcon className="text-red-700"/>
                </button>)
              }
              

              <button className="p-2" onClick={handleSearchSubmit}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="https://kitapeduli.id/img/slider/Kita%20Peduli%20Foundation.webp"
                >
                  <g id="search_24px">
                    <path
                      id="icon/action/search_24px"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.965 14.255H15.755L20.745 19.255L19.255 20.745L14.255 15.755V14.965L13.985 14.685C12.845 15.665 11.365 16.255 9.755 16.255C6.16504 16.255 3.255 13.345 3.255 9.755C3.255 6.16501 6.16504 3.255 9.755 3.255C13.345 3.255 16.255 6.16501 16.255 9.755C16.255 11.365 15.665 12.845 14.6851 13.985L14.965 14.255ZM5.255 9.755C5.255 12.245 7.26501 14.255 9.755 14.255C12.245 14.255 14.255 12.245 14.255 9.755C14.255 7.26501 12.245 5.255 9.755 5.255C7.26501 5.255 5.255 7.26501 5.255 9.755Z"
                      fill="black"
                      fillOpacity="0.54"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
    ))
}

export default AppBar;