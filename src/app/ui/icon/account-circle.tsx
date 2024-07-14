import React from "react";

interface AccountCircleIconProps {
  className?: string;
}

const AccountCircleIcon: React.FC<AccountCircleIconProps> = ({className}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="account_circle_24px">
        <path
          id="icon/action/account_circle_24px"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4ZM12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6ZM12 14C10.67 14 8 14.83 8 16.17V17H16V16.17C16 14.83 13.33 14 12 14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default AccountCircleIcon;
