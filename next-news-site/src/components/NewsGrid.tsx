"use client";

import { LeaderboardBanner } from "@/AddBanners/AddBanners";
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
      {/* News Content Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column News */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          {/* Left Banner */}
          <div className="relative">
            <div className="absolute top-0 left-0">
              <img
                src="/NEWSBlue.png"
                alt="Blue news banner"
                className="w-20 h-12 object-cover rounded"
              />
            </div>
            <div className="border-t-4 border-blue-400 mt-10 pt-2"></div>
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
                    className="w-full h-48 object-cover rounded"
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

        {/* Right Column News */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          {/* Right Banner */}
          <div className="relative">
            <div className="absolute top-0 left-0">
              <img
                src="/NEWSOrange.png"
                alt="Orange news banner"
                className="w-20 h-12 object-cover rounded"
              />
            </div>
            <div className="border-t-4 border-orange-400 mt-10 pt-2"></div>
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
                    className="w-full h-48 object-cover rounded"
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
      <LeaderboardBanner id="top-ad" className="my-4" />
    </div>
  );
};

export default NewsGrid;
