// assets/icons/IconWrapper.tsx
import Image from "next/image";

export const IconWrapper = ({ src, alt, className }: { src: any; alt: string; className?: string }) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={24}
      height={24}
    />
  );
};