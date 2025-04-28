"use client"; // Under the authors view
import { useEffect, useState } from "react";

interface TopNewsItem {
  id: number;
  title: string;
  url: string;
  category_name: string;
  siteName: string;
  image_url: string;
  type: string;
}

const TopNews = () => {
  const [newsData, setNewsData] = useState<TopNewsItem[]>([]);

  useEffect(() => {
    fetch("https://editor.samanyoluhaber.com/api/v1/top-news?limit=9", {
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
    <div className="border-t-4 border-red-700 mt-12 relative">
      {/* Overlapping image at top of border */}
      <div className="absolute top-0 left-0 -mt-8.5 -ml-1">
        <img
          src="/BrownNews.png"
          alt="Top banner"
          className=" h-10 object-cover rounded"
        />
      </div>

      <div className="flex flex-col gap-4 py-4 mt-2">
        {" "}
        {newsData.map((item) => (
          <a
            key={item.id}
            href={item.siteName + item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 border-b pb-4 items-start hover:bg-gray-100 py-2 rounded transition"
          >
            <img
              src={item.image_url}
              alt={item.title}
              className="w-48 h-28 object-cover rounded"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">
                {truncate(item.title, 80)}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{item.category_name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopNews;
