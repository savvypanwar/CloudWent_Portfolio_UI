import Image from "next/image";

export interface ProjectGalleryProps {
  images: string[];
}

export const ProjectGallery = ({ images }: ProjectGalleryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, i) => (
        <div
          key={i}
          className={`relative overflow-hidden rounded-xl ${
            i === 0 ? "md:col-span-2 lg:col-span-3" : ""
          }`}
        >
          <Image
            src={image}
            alt={`Project image ${i + 1}`}
            width={800}
            height={600}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      ))}
    </div>
  );
};