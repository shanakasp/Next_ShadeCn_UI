"use client";

import { useEffect, useState } from "react";

interface TopNewsItem {
  id: number;
  title: string;
  url: string;
  image_url: string;
  siteName: string;
}

const TopNews = () => {
  const [newsData, setNewsData] = useState<TopNewsItem[]>([]);

  useEffect(() => {
    fetch("https://editor.samanyoluhaber.com/api/v1/top-news?limit=7", {
      headers: {
        Authorization:
          "Bearer Qp9zY2tAdn38vDb0jXzAEmr0yRwHogZ3spYiEVl1sn5j2zv5QyKN49U6WObVmFbL",
      },
    })
      .then((res) => res.json())
      .then((data) => setNewsData(data.data))
      .catch((err) => console.error("Error fetching top news:", err));
  }, []);

  const truncate = (text: string, max: number) =>
    text.length > max ? text.slice(0, max) + "..." : text;

  return (
    <div className="border-t-4 border-blue-700 mt-2">
      <div className="flex flex-col gap-4 p-4">
        {newsData.map((item) => (
          <a
            key={item.id}
            href={`${item.siteName}${item.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 border-b pb-4 items-start hover:bg-gray-100 p-2 border rounded-none border-t-0 border-l-0 border-r-0 transition"
          >
            <img
              src={item.image_url}
              alt={item.title}
              className="w-36 h-28 object-cover"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">
                {truncate(item.title, 80)}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{item.siteName}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopNews;
