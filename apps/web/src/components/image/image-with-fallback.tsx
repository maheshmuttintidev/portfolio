"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function ImageWithFallback({
  title,
  alt,
  src,
  className,
  priority,
  height,
  width,
}: {
  title?: string;
  priority: boolean;
  height: number;
  width: number;
  alt: string;
  className: string;
  src: string;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageLoaded(false);
  };
  return (
    <>
      <Image
        alt={alt}
        priority={priority}
        height={height}
        width={width}
        src={src}
        className={className}
        title={title}
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{
          display: imageLoaded ? "block" : "none",
        }}
      />
      {imageLoaded ? null : (
        <div className="my-custom-card h-36 w-full border-2 mx-auto text-center flex flex-col items-center justify-center">Failed to load image</div>
      )}
    </>
  );
}
