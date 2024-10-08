import React from "react";

interface HomeIconProps {
  className?: string;
}

const HomeIcon: React.FC<HomeIconProps> = ({className}) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="home_24px">
        <path
          id="icon/action/home_24px"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 12.5H2L12 3.5L22 12.5H19V20.5H13V14.5H11V20.5H5V12.5ZM17 10.69L12 6.19L7 10.69V18.5H9V12.5H15V18.5H17V10.69Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default HomeIcon;
