"use client";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
export default function Readmore() {
  const [showFAQ, setShowFAQ] = useState(false);
  return (
    <div className="w-full flex flex-col  mb-5 border-b border-b-[#e0e0e6]">
      <button
        onClick={() => setShowFAQ(!showFAQ)}
        className="flex justify-between items-center w-100 pl-5 pb-5"
      >
        {/* icon */}
        <div>{showFAQ ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
        {/* question */}
        <div>چطور می‌توانم سفارشم را پیگیری کنم؟</div>
      </button>
      {/* extra text */}
      {showFAQ && (
        <div className="text-justify rtl:mr-3">
          وارد سایت دیجی‌کالا شوید. روی گزینه سفارش‌های من کلیک کنید. در این
          قسمت با کلیک روی جزییات می‌توانید سفارش خود را ببینید. می‌توانید در
          این قسمت روند آماده‌سازی و مراحل ارسال سفارش خود را پیگیری کنید.
        </div>
      )}
    </div>
  );
}
