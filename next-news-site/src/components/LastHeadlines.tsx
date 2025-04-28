"use client";
import { useEffect, useState } from "react";

//2nd headline last 15
interface HeadlineItem {
  id: number;
  title: string;
  url: string;
  image_url: string;
  siteName: string;
  name: string;
  type: string;
}

const Headlines = () => {
  const [newsData, setNewsData] = useState<HeadlineItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://editor.samanyoluhaber.com/api/v1/headlines?limit=30", {
      headers: {
        Authorization:
          "Bearer Qp9zY2tAdn38vDb0jXzAEmr0yRwHogZ3spYiEVl1sn5j2zv5QyKN49U6WObVmFbL",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const headlines = data.data.slice(15, 30);
        setNewsData(headlines);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching headlines:", err);
        setIsLoading(false);
      });
  }, []);

  const truncate = (text: string, max: number) =>
    text.length > max ? text.slice(0, max) + "..." : text;

  if (isLoading) {
    return (
      <div className="border-t-4 border-blue-700 mt-4 p-8 text-center relative">
        {/* Overlapping image at top of border */}
        <div className="absolute top-0 left-0 -mt-2 ml-2 ">
          <img
            src="/BrownFirstNews.png"
            alt="Top banner"
            className=" h-10 object-cover rounded"
          />
        </div>
        <p className="text-gray-600 mt-6">Loading headlines...</p>
      </div>
    );
  }

  return (
    <div className="border-t-4 border-blue-700 mt-12 relative">
      {/* Overlapping image at top of border */}
      <div className="absolute -top-8 left-0 -mt-2 ">
        <img
          src="/LastHeadline.png"
          alt="Top banner"
          className=" h-13 object-cover rounded"
        />
      </div>
      <div className="flex flex-col gap-4 py-4 mt-2">
        {newsData.map((item) => (
          <a
            key={item.id}
            href={`${item.siteName}${item.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 border-b pb-4 items-start hover:bg-gray-100 p-2 border rounded-none border-t-0 border-l-0 border-r-0 transition"
          >
            <div
              className="
                w-[140px] h-[100px]
                sm:w-[180px] sm:h-[120px]
                md:w-[250px] md:h-[150px]
                lg:w-[300px] lg:h-[170px]
                xl:w-[355px] xl:h-[200px]
                overflow-hidden
                rounded
                flex-shrink-0
              "
            >
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="flex flex-col">
              <h3
                className="
                  font-semibold
                  text-base
                  sm:text-lg
                  md:text-xl
                  lg:text-2xl
                  xl:text-[28px]
                "
              >
                {truncate(item.title, 80)}
              </h3>
              <div className="flex gap-2 mt-1">
                <p className="text-sm text-gray-600">{item.siteName}</p>
                <span className="text-sm text-gray-400">•</span>
                <p className="text-sm text-blue-600">{item.name}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Headlines;
