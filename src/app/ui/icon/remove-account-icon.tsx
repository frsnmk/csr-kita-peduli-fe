import React from "react";

interface RemoveAccountIconProps {
  className?: string;
}

const RemoveAccountIcon: React.FC<RemoveAccountIconProps> = ({className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path d="m696-440-56-56 83-84-83-83 56-57 84 84 83-84 57 57-84 83 84 84-57 56-83-83-84 83Zm-336-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Z" fill="currentColor"/></svg>
  );
};

export default RemoveAccountIcon;