import React from "react";

const Sidebar = () => {
  const [active, setActive] = React.useState(0);

  const handleClick = (number) => {
    setActive(number);
  };

  return (
    <aside className="flex">
    <div className="flex flex-col grow items-center justify-between">
      <div className="flex flex-col justify-between items-center">
        <div
          className={`${
            active == 0 && "border-l-2 border-solid border-accent-color"
          } hover:bg-[#1f2428] block h-12 w-full py-[10.4px] box-border mx-1`}
          onClick={() => {
            handleClick(0);
          }}
        >
          <svg
            className="mx-auto"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill={`${
              active == 0 ? "rgb(225, 228, 232)" : "rgb(106, 115, 125)"
            }`}
          >
            <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"></path>
          </svg>
        </div>

        <div
          className={`${
            active === 1 && "border-l-2 border-solid border-accent-color"
          } hover:bg-[#1f2428] block h-12 w-12 py-[10.4px] box-border mx-1`}
          onClick={() => {
            handleClick(1);
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill={`${
              active == 1 ? "rgb(225, 228, 232)" : "rgb(106, 115, 125)"
            }`}
            className="mx-auto"
          >
            <path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 01-.728-.728v-3.73a2.497 2.497 0 00-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 00.09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 00-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 01-.728.728.718.718 0 01-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 016.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path>
          </svg>
        </div>
        <div
          className={`${
            active === 2 && "border-l-2 border-solid border-accent-color"
          } hover:bg-[#1f2428] block h-12 w-12 py-[10.4px] box-border mx-1`}
          onClick={() => {
            handleClick(2);
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill={`${
              active == 2 ? "rgb(225, 228, 232)" : "rgb(106, 115, 125)"
            }`}
            className="mx-auto"
          >
            <path d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z"></path>
          </svg>
        </div>
        <div
          className={`${
            active === 3 && "border-l-2 border-solid border-accent-color"
          } hover:bg-[#1f2428] block h-12 w-12 py-[10.4px] box-border mx-1`}
          onClick={() => {
            handleClick(3);
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill={`${
              active == 3 ? "rgb(225, 228, 232)" : "rgb(106, 115, 125)"
            }`}
            className="mx-auto"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 3.5l.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zm1 1.035V12h12V4.536L8.31 8.9H7.7L2 4.535zM13.03 4H2.97L8 7.869 13.03 4z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center">
        <div
          className="hover:bg-[#1f2428] block h-12 w-12 py-[10.4px] box-border mx-1"
          onClick={() => {
            handleClick(4);
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
            fill={`${
              active == 4 ? "rgb(225, 228, 232)" : "rgb(106, 115, 125)"
            }`}
          >
            <path d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09.016.016.032.016.032.032.144.112.288.224.448.336.08.048.144.111.224.175A7.98 7.98 0 008.016 16a7.98 7.98 0 004.48-1.375c.08-.048.144-.111.224-.16.144-.111.304-.223.448-.335.016-.016.032-.016.032-.032 1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279.016-.128.048-.255.08-.383a4.17 4.17 0 01.416-.991c.176-.304.384-.576.64-.816.24-.24.528-.463.816-.639.304-.176.624-.304.976-.4A4.15 4.15 0 018 10.342a4.185 4.185 0 012.928 1.166c.368.368.656.8.864 1.295.112.288.192.592.24.911A7.03 7.03 0 018 14.993zm-2.448-7.4a2.49 2.49 0 01-.208-1.024c0-.351.064-.703.208-1.023.144-.32.336-.607.576-.847.24-.24.528-.431.848-.575.32-.144.672-.208 1.024-.208.368 0 .704.064 1.024.208.32.144.608.336.848.575.24.24.432.528.576.847.144.32.208.672.208 1.023 0 .368-.064.704-.208 1.023a2.84 2.84 0 01-.576.848 2.84 2.84 0 01-.848.575 2.715 2.715 0 01-2.064 0 2.84 2.84 0 01-.848-.575 2.526 2.526 0 01-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 00-.688-1.406 4.883 4.883 0 00-1.088-1.135 5.207 5.207 0 00-1.04-.608 2.82 2.82 0 00.464-.383 4.2 4.2 0 00.624-.784 3.624 3.624 0 00.528-1.934 3.71 3.71 0 00-.288-1.47 3.799 3.799 0 00-.816-1.199 3.845 3.845 0 00-1.2-.8 3.72 3.72 0 00-1.472-.287 3.72 3.72 0 00-1.472.288 3.631 3.631 0 00-1.2.815 3.84 3.84 0 00-.8 1.199 3.71 3.71 0 00-.288 1.47c0 .352.048.688.144 1.007.096.336.224.64.4.927.16.288.384.544.624.784.144.144.304.271.48.383a5.12 5.12 0 00-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 00-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 01-2.032 4.907z"></path>
          </svg>
        </div>
        <div
          className="hover:bg-[#1f2428] block h-12 w-12 py-[10.4px] box-border mx-1"
          onClick={() => {
            handleClick(6);
          }}
        >
          
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
            fill={`${
              active == 6 ? "rgb(225, 228, 232)" : "rgb(106, 115, 125)"
            }`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.85 8.75l4.15.83v4.84l-4.15.83 2.35 3.52-3.43 3.43-3.52-2.35-.83 4.15H9.58l-.83-4.15-3.52 2.35-3.43-3.43 2.35-3.52L0 14.42V9.58l4.15-.83L1.8 5.23 5.23 1.8l3.52 2.35L9.58 0h4.84l.83 4.15 3.52-2.35 3.43 3.43-2.35 3.52zm-1.57 5.07l4-.81v-2l-4-.81-.54-1.3 2.29-3.43-1.43-1.43-3.43 2.29-1.3-.54-.81-4h-2l-.81 4-1.3.54-3.43-2.29-1.43 1.43L6.38 8.9l-.54 1.3-4 .81v2l4 .81.54 1.3-2.29 3.43 1.43 1.43 3.43-2.29 1.3.54.81 4h2l.81-4 1.3-.54 3.43 2.29 1.43-1.43-2.29-3.43.54-1.3zm-8.186-4.672A3.43 3.43 0 0112 8.57 3.44 3.44 0 0115.43 12a3.43 3.43 0 11-5.336-2.852zm.956 4.274c.281.188.612.288.95.288A1.7 1.7 0 0013.71 12a1.71 1.71 0 10-2.66 1.422z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div className="w-[18vw] bg-explorer-bg">Hello</div>
    </aside>
  );
};

export default Sidebar;
