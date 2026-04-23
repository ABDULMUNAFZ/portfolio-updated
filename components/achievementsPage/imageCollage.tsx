import React from "react";
import Image from "next/image";

type ImageCollageProps = {
  images: string[];
  color: "Dark" | "Light";
};

export function ImageCollage({ images, color }: ImageCollageProps) {
  const count = images.length;
  const collageClass =
    count <= 2 ? "collage-2" : count <= 3 ? "collage-3" : count === 4 ? "collage-4" : "collage-5";

  // If no images, show placeholder
  if (!images.length || images.every((img) => !img)) {
    return (
      <div className="ach-collage-placeholder">
        <span>🏆</span>
        <span>Images coming soon</span>
      </div>
    );
  }

  const validImages = images.filter((img) => img);

  return (
    <div className={`ach-collage ${collageClass}`}>
      {validImages.map((src, i) => (
        <div key={i} className="ach-collage-img anime">
          {/* Decorative border/frame effect */}
          <div
            className="absolute inset-0 z-10 rounded-2xl pointer-events-none"
            style={{
              border:
                color === "Dark"
                  ? "3px solid rgba(222,244,56,0.15)"
                  : "3px solid rgba(28,28,28,0.1)",
            }}
          />
          <Image
            src={src}
            alt={`Achievement photo ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 45vw, 30vw"
          />
        </div>
      ))}
    </div>
  );
}
