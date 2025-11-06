import React from "react";

const savedPhotos = [
  "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/SEPTEMBER/9/U8i8B4N0_18dc8a55127d4ce489bbf840edba04d6.jpg",
  "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/NOVEMBER/3/D4eyXaH1_03a2bb8c198948ab9de4e314e600589e.jpg",
  "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24979426/2024/10/17/919d5752-3209-4ad5-955d-b7f1c93d91911729151427439-NOBERO-Hooded-Drop-Shoulder-Sleeves-Oversized-Sweatshirt-527-5.jpg",
  "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/OCTOBER/16/QeucjdZq_a2a7df8c3c5046a48635234bb96b23e4.jpg",
];

export default function ProfilePage() {
  const user = {
    name: "Satyam",
    profilePic: "/gojo.jpg",
    savedCount: savedPhotos.length,
  };

  return (
    <div className="max-w-md mx-auto font-sans p-2 bg-black text-white min-h-screen scrollbar-hide">
      {/* Navbar */}
      <div className="navbar bg-black shadow-sm mb-4">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-white normal-case">
            Aivue
          </a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Profile Header */}
      <div className="flex items-center mb-3 px-4 pb-5">
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-500"
        />
        <div className="ml-6 flex flex-col">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-400 text-lg mt-1">{user.savedCount} Saved</p>
        </div>
      </div>

      <ul className="flex flex-wrap gap-3 bg-black p-3 pt-0 mb-3 items-center justify-center">
        <li>
          <a className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300">
            Hoodies
          </a>
        </li>
        <li>
          <a className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300">
            Shirts
          </a>
        </li>
        <li>
          <a className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300">
            Pants
          </a>
        </li>
        <li>
          <a className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300">
            Shoes
          </a>
        </li> 
      </ul>

      {/* Photo Grid */}
      <div
        className="columns-2 gap-1"
        // style={{ columnGap: "8px" }}
      >
        {savedPhotos.map((photo, index) => (
          <div key={index} className="mb-1 break-inside-avoid overflow-hidden">
            <img
              src={photo}
              alt={`Saved ${index}`}
              className="w-full object-cover rounded-xs hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
