"use client";

// Under the authors view
import { useEffect, useState } from "react";

interface PopularNewsItem {
  id: number;
  title: string;
  abstract: string;
  url: string;
  path: string;
}

const PopularNews = () => {
  const [newsData, setNewsData] = useState<PopularNewsItem[]>([]);

  useEffect(() => {
    fetch("https://editor.samanyoluhaber.com/api/v1/popular-news", {
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

  return (
    <div className="border-t-4 border-red-700 mt-2">
      <div className="flex flex-col gap-4 py-4">
        {newsData.slice(0, 8).map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 border-b pb-4 items-start hover:bg-gray-100 py-2 rounded transition"
          >
            <img
              src={item.path}
              alt={item.title}
              className="w-48 h-28 object-cover rounded"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">
                {truncate(item.title, 80)}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {truncate(item.abstract, 100)}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularNews;
