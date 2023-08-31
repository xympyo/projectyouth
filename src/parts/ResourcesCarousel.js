import React, { useState, useEffect } from "react";

import worshipLeaderPlaceholder from "../assets/images/worshipLeaderResourcesPlaceholder.svg";
import singerPlaceholder from "../assets/images/singerResourcesPlaceholder.svg";
import musicPlaceholder from "../assets/images/musicResourcesPlaceholder.svg";
import multimediaPlaceholder from "../assets/images/multimediaResourcesPlaceholder.svg";
import usherPlaceholder from "../assets/images/usherResourcesPlaceholder.svg";

const images = [
  worshipLeaderPlaceholder,
  singerPlaceholder,
  musicPlaceholder,
  multimediaPlaceholder,
  usherPlaceholder,
];

const autoRotateInterval = 3000; // Time in milliseconds between image changes

export default function ResourceCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoRotateTimer, setAutoRotateTimer] = useState(null);

  useEffect(() => {
    // Start the auto rotation timer
    const timer = setInterval(() => {
      // Calculate the index of the next image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoRotateInterval);
    setAutoRotateTimer(timer);

    return () => clearInterval(timer); // Clear the interval on unmount to prevent memory leaks
  }, []);

  const previousImage = () => {
    // Clear the current auto rotation timer
    clearInterval(autoRotateTimer);

    // Calculate the index of the previous image
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

    // Start a new auto rotation timer
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoRotateInterval);
    setAutoRotateTimer(timer);
  };

  const nextImage = () => {
    // Clear the current auto rotation timer
    clearInterval(autoRotateTimer);

    // Calculate the index of the next image
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

    // Start a new auto rotation timer
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoRotateInterval);
    setAutoRotateTimer(timer);
  };

  return (
    <div className="carousel-container container">
      <div className="carousel-slide" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Ministries ${index}`} />
        ))}
      </div>
      <button className="carousel-btn prev-btn" onClick={previousImage}>
        Previous
      </button>
      <button className="carousel-btn next-btn" onClick={nextImage}>
        Next
      </button>
    </div>
  );
}
