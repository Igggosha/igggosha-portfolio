"use client";

import Image from "next/image";
import { useState } from "react";
import { YouTubeEmbed } from "./youtube-embed";

/** Displays an optional project media carousel with image and video slides. */
export function MediaCarousel({ items, title }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items?.length) {
    return null;
  }

  const activeItem = items[activeIndex];
  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + items.length) % items.length);
  };
  const showNext = () => {
    setActiveIndex((index) => (index + 1) % items.length);
  };

  return (
    <section className="media-carousel" aria-label={`${title} media carousel`}>
      <div className="media-carousel-heading">
        <h3>{title}</h3>
        <span aria-live="polite">
          {String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
      </div>
      {activeItem.type === "video" ? (
        <YouTubeEmbed videoId={activeItem.videoId} title={activeItem.title} />
      ) : (
        <div className="media-carousel-image-frame">
          <Image
            className="media-carousel-image"
            src={activeItem.src}
            alt={activeItem.alt}
            width={activeItem.src.width}
            height={activeItem.src.height}
            sizes="(max-width: 900px) 100vw, 1120px"
          />
        </div>
      )}
      <div className="media-carousel-controls">
        <button type="button" onClick={showPrevious} aria-label="Previous slide">
          <span aria-hidden="true">←</span> Previous
        </button>
        <div className="media-carousel-dots" aria-label="Choose a slide">
          {items.map((item, index) => (
            <button
              key={item.type === "video" ? item.videoId : item.src.src}
              type="button"
              className={index === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
        <button type="button" onClick={showNext} aria-label="Next slide">
          Next <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
