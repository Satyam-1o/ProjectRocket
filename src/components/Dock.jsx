import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Dock() {
  const location = useLocation();
  const [active, setActive] = useState("Trending"); // Default active button

  const buttons = [
    { label: "For You", icon: "For You", link: "/" },
    { label: "Trending", icon: "Trending", link: "/trending" },
    { label: "Saved", icon: "Saved", link: "/saved" },
  ];

  return (
    <div className="dock bg-black md:w-[400px] mx-auto items-center">
      {buttons.map((btn) => (
        <Link
          key={btn.label}
          to={btn.link}
          className={active === btn.label ? "dock-active" : ""}
          onClick={() => setActive(btn.label)}
        >
          {btn.icon === "For You" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#FFFFFF"
            >
              <path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z" />
            </svg>
          )}

          {btn.icon === "Trending" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#FFFFFF"
            >
              <path d="M127.33-240 80-287.33l293.33-293.34L538-416l230-229.33H648.67V-712H880v231.33h-66v-116.66L537.33-320.67 372.67-485.33 127.33-240Z" />
            </svg>
          )}

          {btn.icon === "Saved" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#FFFFFF"
            >
              <path d="M160-80v-574q0-27.5 19.58-47.08 19.59-19.59 47.09-19.59h346.66q27.5 0 47.09 19.59Q640-681.5 640-654v574L400-199.33 160-80Zm66.67-105L400-273l173.33 88v-469H226.67v469Zm506.66-54.33V-814H282.67v-66.67h450.66q27.5 0 47.09 19.59Q800-841.5 800-814v574.67h-66.67ZM226.67-654h346.66-346.66Z" />
            </svg>
          )}

          <span className="dock-label pb-2">{btn.label}</span>
        </Link>
      ))}
    </div>
  );
}
