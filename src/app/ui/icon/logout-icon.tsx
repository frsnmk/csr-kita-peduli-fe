import React from "react";

interface LogoutIconProps {
  className?: string;
}

const LogoutIcon: React.FC<LogoutIconProps> = ({className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" fill="currentColor"/></svg>
  );
};

export default LogoutIcon;
