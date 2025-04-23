"use client";

import { useEffect, useState } from "react";
import NewsGrid from "./NewsGrid";
import PopularNews from "./PopularNews";
import TopNews from "./TopNews";
export default function NewsSection() {
  const [headlines, setHeadlines] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(8); // Assuming 8 pages for this example
  const [loading, setLoading] = useState(true);

  // API authentication token
  const API_TOKEN =
    "Qp9zY2tAdn38vDb0jXzAEmr0yRwHogZ3spYiEVl1sn5j2zv5QyKN49U6WObVmFbL"; // Replace with your actual token

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://editor.samanyoluhaber.com/api/v1/headlines?limit=${currentPage}`,
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        if (data.status === "success" && data.data.length > 0) {
          const headlineIndex = currentPage - 1;
          if (data.data[headlineIndex]) {
            setHeadlines([data.data[headlineIndex]]);
          }
        }
      } catch (error) {
        console.error("Error fetching headlines:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchAuthors = async () => {
      try {
        const response = await fetch(
          "https://editor.samanyoluhaber.com/api/v1/authors?limit=5",
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        if (data.status === "success") {
          setAuthors(data.data);
        }
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchHeadlines();
    fetchAuthors();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const renderPagination = () => {
    const pages = [];
    const pageRangeDisplayed = 5; // Number of page buttons around current page
    const startPage = Math.max(2, currentPage - 2);
    const endPage = Math.min(totalPages - 1, currentPage + 2);

    // Previous button
    pages.push(
      <button
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 text-gray-600 hover:text-blue-600"
      >
        Previous
      </button>
    );

    // First Page
    pages.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={`px-4 py-2 rounded-full mx-1 ${
          currentPage === 1
            ? "bg-blue-100 text-blue-600 font-bold"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        1
      </button>
    );

    // Ellipsis before middle pages
    if (startPage > 2) {
      pages.push(
        <span key="start-ellipsis" className="px-2">
          ...
        </span>
      );
    }

    // Middle pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 rounded-full mx-1 ${
            currentPage === i
              ? "bg-blue-100 text-blue-600 font-bold"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {i}
        </button>
      );
    }

    // Ellipsis after middle pages
    if (endPage < totalPages - 1) {
      pages.push(
        <span key="end-ellipsis" className="px-2">
          ...
        </span>
      );
    }

    // Last Page
    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`px-4 py-2 rounded-full mx-1 ${
            currentPage === totalPages
              ? "bg-blue-100 text-blue-600 font-bold"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    // Next button
    pages.push(
      <button
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-gray-600 hover:text-blue-600"
      >
        Next
      </button>
    );

    return pages;
  };

  return (
    <div className="container mx-auto px-4 mt-30">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main News Content */}
        <div className="lg:w-2/3">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              {/* Single Featured News */}
              {headlines.length > 0 && (
                <div className="mb-8 border-b pb-6 relative mt-4">
                  <div className="relative h-96 w-full mb-4">
                    <img
                      src={headlines[0].image_url}
                      alt={headlines[0].title}
                      className="object-cover w-full h-full"
                    />
                    {/* Title positioned on top of the image */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4">
                      <h2 className="text-2xl font-bold text-white">
                        {headlines[0].title}
                      </h2>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <span className="bg-red-600 text-white px-2 py-1 mr-2">
                      {headlines[0].name}
                    </span>
                    <span>5 saat önce</span>
                  </div>
                </div>
              )}

              {/* Pagination */}
              <div className="flex justify-center items-center mt-8 space-x-1">
                {renderPagination()}
              </div>
            </>
          )}
          <NewsGrid />
          <TopNews />
        </div>

        {/* Authors Section */}
        <div className="lg:w-1/3">
          <div className="bg-white shadow-sm p-4">
            <h2 className="text-xl font-bold text-white bg-amber-800 px-4 py-2 mb-4">
              YAZARLAR
            </h2>

            <div className="space-y-6">
              {authors.map((author, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 border-b pb-4"
                >
                  <div className="flex-shrink-0 w-20 h-20 relative">
                    <img
                      src={author.image_path}
                      alt={author.title.split("Harun Tokak")[0]}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold uppercase mb-1">
                      {author.title.includes("Harun Tokak")
                        ? "HARUN TOKAK"
                        : author.title.split(" ")[0] +
                          " " +
                          author.title.split(" ")[1]}
                    </h3>
                    <p className="text-sm line-clamp-2">
                      {author.body?.replace(/<[^>]*>/g, "").substring(0, 100)}
                      ...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <PopularNews />
        </div>
      </div>
    </div>
  );
}
