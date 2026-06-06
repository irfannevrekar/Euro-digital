import React from "react";

function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-full bg-[#86c440] hover:bg-[#76b43a] text-[#0f1f0f] font-semibold px-7 py-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.2)] border border-[#7dbf3b] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#86c440]">
      {children}
    </button>
  );
}

export default Button;
