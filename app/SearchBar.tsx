"use client";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const [results, setResults] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const stockMapping = [
    {
      StockId: 2,
      StockName: "Tata Consultancy Services Limited",
    },
    {
      StockId: 4,
      StockName: "ICICI Bank Limited",
    },
    {
      StockId: 1,
      StockName: "Reliance Industries Limited",
    },
    {
      StockId: 5,
      StockName: "State Bank of India",
    },
  ];

  const [searchInput, setSearchInput] = useState("");
  const handleChange = async (value) => {
    setSearchInput(value);
  };

  useEffect(() => {
    const filteredStocks = stockMapping.filter((stock) =>
      stock.StockName.toLowerCase().includes(searchInput.toLowerCase())
    );
    setResults(filteredStocks);
  }, [searchInput]);

  const handleFocus = () => {
    setIsVisible(true);
  };

  const handleBlur = () => {
    // Adding a small delay to allow time for the click event on the results to trigger before hiding them
    setTimeout(() => {
      setIsVisible(false);
    }, 100);
  };

  return (
    <div className="bg-gray-200 flex w-[600px] mr-32 ">
      <div className=" bg-white rounded-md  w-full relative z-0">
        <div className="flex items-center border rounded-md h-full px-4">
          <input
            placeholder="Search for stocks"
            value={searchInput}
            onChange={(e) => handleChange(e.target.value)}
            className="bg-transparent border-none h-full ml-2 w-full focus:outline-none"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        {results && results.length > 0 && (
          <div
            className={`inset w-full absolute inset-x-0 z-10 top-2 rounded-md bg-gray-400 shadow-md mt-4 max-h-300 overflow-y-auto ${
              isVisible ? `block` : `hidden`
            }`}
          >
            {results
              ? results
                  .slice(0, 5)
                  .map((result, id) => <div key={id}>{result.StockName}</div>)
              : isVisible && <div>No results found</div>}
          </div>
        )}
      </div>
    </div>
  );
}
