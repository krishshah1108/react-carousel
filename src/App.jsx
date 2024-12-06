import React, { useEffect, useState, useRef } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FiCircle } from "react-icons/fi";

const App = () => {
  const intervalRef = useRef();
  const images = [
    "https://via.placeholder.com/600/92c952",
    "https://via.placeholder.com/600/771796",
    "https://via.placeholder.com/600/24f355",
    "https://via.placeholder.com/600/92c952",
    "https://via.placeholder.com/600/f66b97",
    "https://via.placeholder.com/600/56a8c2",
  ];
  const [currIndex, setCurrIndex] = useState(0);
  const handlePrevious = () => {
    currIndex === 0
      ? setCurrIndex(images.length - 1)
      : setCurrIndex(currIndex - 1);
  };
  const handleNext = () => {
    currIndex === images.length - 1
      ? setCurrIndex(0)
      : setCurrIndex(currIndex + 1);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      currIndex === images.length - 1
        ? setCurrIndex(0)
        : setCurrIndex(currIndex + 1);
    }, 3000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currIndex]);

  return (
    <div className='main-container'>
      <div className='image-slider'>
        <div className='image-container'>
          <img src={images[currIndex]} alt='' />
        </div>
        <div className='arrows'>
          <FaChevronLeft onClick={handlePrevious} size={30} />
          <FaChevronRight size={30} onClick={handleNext} />
        </div>
        <div className='dots'>
          {images.map((_, index) => {
            return (
              <span
                key={index}
                style={
                  currIndex === index
                    ? { backgroundColor: "black" }
                    : { backgroundColor: "grey" }
                }
                onClick={() => setCurrIndex(index)}
              >
                <FiCircle />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
