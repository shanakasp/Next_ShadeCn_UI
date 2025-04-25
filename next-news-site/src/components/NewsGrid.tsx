"use client";

import { useEffect, useState } from "react";

interface NewsItem {
  id: number;
  type: string;
  title: string;
  url: string;
  category_name: string;
  siteName: string;
  image_url: string;
}

const NewsGrid = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch("https://editor.samanyoluhaber.com/api/v1/top-news?limit=10", {
      headers: {
        Authorization:
          "Bearer Qp9zY2tAdn38vDb0jXzAEmr0yRwHogZ3spYiEVl1sn5j2zv5QyKN49U6WObVmFbL",
      },
    })
      .then((res) => res.json())
      .then((data) => setNewsData(data.data))
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  const truncate = (text: string, max: number) =>
    text.length > max ? text.slice(0, max) + "..." : text;

  const firstColumn = newsData.slice(0, 5);
  const secondColumn = newsData.slice(5, 10);

  return (
    <div className="flex flex-col gap-6 p-4">
      {/* Grid Columns */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-4 w-full md:w-1/2 border-t-4 border-orange-500 pt-2 relative">
          {/* Image positioned at top left of container */}
          <div className="absolute top-0 left-0 -mt-2 -ml-1">
            <img
              src="/authors.png"
              alt="Top banner"
              className="w-20 h-10 object-cover rounded"
            />
          </div>
          {firstColumn.map((item, index) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-gray-300 pb-3 hover:bg-gray-100 transition duration-200 flex flex-col gap-2"
            >
              {index === 0 ? (
                <>
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded mt-6"
                  />
                  <h3 className="text-lg font-semibold">
                    {truncate(item.title, 80)}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {item.category_name}
                  </span>
                </>
              ) : (
                <div className="flex items-center gap-4">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-40 h-24 object-cover rounded"
                  />
                  <h3 className="text-base font-medium">
                    {truncate(item.title, 80)}
                  </h3>
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 w-full md:w-1/2 border-t-4 border-blue-500 pt-2 relative">
          {/* Image positioned at top left of container */}
          <div className="absolute top-0 left-0 -mt-2 -ml-1">
            <img
              src="/authors.png"
              alt="Top banner"
              className="w-20 h-10 object-cover rounded"
            />
          </div>
          {secondColumn.map((item, index) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-gray-300 pb-3 hover:bg-gray-100 transition duration-200 flex flex-col gap-2"
            >
              {index === 0 ? (
                <>
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded mt-6"
                  />
                  <h3 className="text-lg font-semibold">
                    {truncate(item.title, 80)}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {item.category_name}
                  </span>
                </>
              ) : (
                <div className="flex items-center gap-4">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-40 h-24 object-cover rounded"
                  />
                  <h3 className="text-base font-medium">
                    {truncate(item.title, 80)}
                  </h3>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsGrid;
