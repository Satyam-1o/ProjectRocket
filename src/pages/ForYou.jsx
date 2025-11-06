import React, { useState, useEffect } from "react";

export default function ForYou() {
  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState({});

  useEffect(() => {
    // Fetch data from trending.json
    fetch("/trending.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load trending products:", err));
  }, []);

  const handleLike = (id) => {
    setLiked((prev) => {
      const isLiked = !prev[id];
      setProducts((p) =>
        p.map((item) =>
          item.id === id
            ? { ...item, likes: Math.max(0, item.likes + (isLiked ? 1 : -1)) }
            : item
        )
      );
      return { ...prev, [id]: isLiked };
    });
  };

  return (
    <div className="bg-black text-white h-screen overflow-y-scroll snap-y snap-mandatory max-w-md mx-auto min-h-screen scrollbar-hide">
      {products.length ? (
        products.map((p) => (
          <div
            key={p.id}
            className="relative h-screen w-full flex items-center justify-center snap-start"
          >
            {/* Image */}
            <img
              src={p.imageUrl}
              alt={p.productName}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-linear-to-t from-black to-transparent" />

            {/* Buttons */}
            <div className="absolute right-4 bottom-28 flex flex-col items-center space-y-4">
              {/* Like Button */}
              <button
                onClick={() => handleLike(p.id)}
                className={`w-12 h-12 flex items-center justify-center rounded-full transition hover:scale-110 ${
                  liked[p.id] ? "bg-red-600" : "bg-gray-900/50"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  width="28"
                  height="28"
                  fill="white"
                >
                  <path d="m480-120.67-46.67-42q-104.18-95.08-172.25-164.04Q193-395.67 152.67-450.17q-40.34-54.5-56.5-99.16Q80-594 80-640q0-91.44 61.33-152.72 61.34-61.28 152-61.28 55.34 0 103.34 25.33 48 25.34 83.33 72.67 39.33-49.33 86.33-73.67 47-24.33 100.34-24.33 90.66 0 152 61.28Q880-731.44 880-640q0 46-16.17 90.67-16.16 44.66-56.5 99.16-40.33 54.5-108.41 123.46-68.07 68.96-172.25 164.04l-46.67 42Z" />
                </svg>
              </button>

              {/* Like Count */}
              <span className="text-lg text-white">{p.likes}</span>

              <a
                href=""
                className="flex items-center justify-center hover:scale-110 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="60px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#FFFFFF"
                >
                  <path d="M160-80v-574q0-27.5 19.58-47.08 19.59-19.59 47.09-19.59h346.66q27.5 0 47.09 19.59Q640-681.5 640-654v574L400-199.33 160-80Zm66.67-105L400-273l173.33 88v-469H226.67v469Zm506.66-54.33V-814H282.67v-66.67h450.66q27.5 0 47.09 19.59Q800-841.5 800-814v574.67h-66.67ZM226.67-654h346.66-346.66Z" />
                </svg>
              </a>

              {/* Shop Button */}
              <a
                href={p.productLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center hover:scale-110 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  width="50"
                  height="50"
                  fill="white"
                >
                  <path d="M480-569.33 433.33-616l70.34-70.67h-177v-66.66h177L433-824l47-46.67L630.67-720 480-569.33ZM286.53-80q-30.86 0-52.7-21.97Q212-123.95 212-154.81q0-30.86 21.98-52.69 21.97-21.83 52.83-21.83t52.69 21.97q21.83 21.98 21.83 52.84 0 30.85-21.97 52.69Q317.38-80 286.53-80Zm402.66 0q-30.86 0-52.69-21.97-21.83-21.98-21.83-52.84 0-30.86 21.97-52.69 21.98-21.83 52.84-21.83 30.85 0 52.69 21.97Q764-185.38 764-154.52q0 30.85-21.97 52.69Q720.05-80 689.19-80ZM54.67-813.33V-880h121l170 362.67H630.8l158.87-280h75L698-489.33q-11 19.33-28.87 30.66-17.88 11.34-39.13 11.34H328.67l-52 96H764v66.66H282.67q-40.11 0-61.06-33-20.94-33-2.28-67L280-496 133.33-813.33H54.67Z" />
                </svg>
              </a>
            </div>

            {/* Info */}
            <div className="absolute bottom-20 left-4">
              <p className="text-lg font-semibold">{p.productName}</p>
              <p className="text-sm text-gray-300">@{p.accountName}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center h-screen text-gray-400">
          No trending products yet
        </div>
      )}
    </div>
  );
}
