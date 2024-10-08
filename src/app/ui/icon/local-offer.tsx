import React from "react";

interface LocalOfferIconProps {
  className?: string;
}

const LocalOfferIcon: React.FC<LocalOfferIconProps> = ({className}) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="local_offer_24px">
        <path
          id="icon/maps/local_offer_24px"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.41 11.58L12.41 2.58002C12.05 2.21997 11.55 2 11 2H4C2.90002 2 2 2.90002 2 4V11C2 11.55 2.21997 12.05 2.59003 12.42L11.59 21.42C11.95 21.78 12.45 22 13 22C13.55 22 14.05 21.78 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.45 21.77 11.94 21.41 11.58ZM13 20.01L4 11V4H11V3.98999L20 12.99L13 20.01ZM5 6.5C5 5.67157 5.67157 5 6.5 5C7.32843 5 8 5.67157 8 6.5C8 7.32843 7.32843 8 6.5 8C5.67157 8 5 7.32843 5 6.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default LocalOfferIcon;
