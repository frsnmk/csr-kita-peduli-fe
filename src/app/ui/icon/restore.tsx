import React from "react";

interface RestoreIconProps {
  className?: string;
}

const RestoreIcon: React.FC<RestoreIconProps> = ({className}) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="restore_24px">
        <path
          id="icon/action/restore_24px"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5 12C4.5 7.03 8.53003 3 13.5 3C18.47 3 22.5 7.03 22.5 12C22.5 16.97 18.47 21 13.5 21C11.01 21 8.77002 19.99 7.14001 18.36L8.56006 16.94C9.81995 18.21 11.5699 19 13.5 19C17.37 19 20.5 15.87 20.5 12C20.5 8.13 17.37 5 13.5 5C9.63 5 6.5 8.13 6.5 12H9.5L5.5 15.99L1.5 12H4.5ZM12.5 13V8H14V12.15L17.52 14.24L16.75 15.52L12.5 13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default RestoreIcon;
