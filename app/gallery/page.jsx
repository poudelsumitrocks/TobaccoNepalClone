"use client";
import React from "react";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="flex gap-4 mt-4">
        <Link href="/gallery/photo" className="bg-gray-800 text-white px-4 py-2 rounded">
          Photos
        </Link>
        <Link href="/gallery/video" className="bg-gray-800 text-white px-4 py-2 rounded">
          Videos
        </Link>
      </div>
    </div>
  );
}
