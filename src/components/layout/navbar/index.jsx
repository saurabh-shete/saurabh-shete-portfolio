import React from "react";

const index = () => {
  return (
    <nav className="flex items-center justify-center h-[30px] bg-[#1f2428] px-[8px] subpixel-antialiased border-b border-solid border-[#191d20]">
      <img
        src="vscode.png"
        alt="VS Code Logo"
        className="object-contain w-[15px] mr-auto"
      />
      <div className="font-medium flex flex-1 items-center text-white text-[13.6px] mr-auto ml-[8px]">
        <p className="mx-[8px] cursor-pointer">File</p>
        <p className="mx-[8px] cursor-pointer">Edit</p>
        <p className="mx-[8px] cursor-pointer">View</p>
        <p className="mx-[8px] cursor-pointer">Go</p>
        <p className="mx-[8px] cursor-pointer">Run</p>
        <p className="mx-[8px] cursor-pointer">Terminal</p>
        <p className="mx-[8px] cursor-pointer">Help</p>
      </div>
      <div className="text-sm font-medium flex-1 text-white text-center">
        Saurabh Shete - Visual Studio Code
      </div>
      <div className="flex flex-1">
        <div className="h-[13px] w-[13px] rounded-full bg-[#f1fa8c] ml-auto" />
        <div className="h-[13px] w-[13px] rounded-full bg-[#50fa7b] ml-[8px]" />
        <div className="h-[13px] w-[13px] rounded-full bg-[#f55] ml-[8px]" />
      </div>
    </nav>
  );
};

export default index;
