// assets/icons/Icon.tsx
import Image from "next/image";

import NextJsIconSrc from "./nextjs.svg";
import ReactIconSrc from "./reactjs.svg";
import NestJsIconSrc from "./nestjs.svg";
import DockerIconSrc from "./Docker.svg";
import TailwindCSSSrc from "./TailwindCSS.svg";

export const NextJsIcon = () => (
  <Image src={NextJsIconSrc} alt="Next.js" width={24} height={24} />
);
export const ReactIcon = () => (
  <Image src={ReactIconSrc} alt="React" width={24} height={24} />
);
export const NestJsIcon = () => (
  <Image src={NestJsIconSrc} alt="NestJS" width={24} height={24} />
);
export const DockerIcon = () => (
  <Image src={DockerIconSrc} alt="Docker" width={24} height={24} />
);
export const TailwindCSS = () => (
  <Image src={TailwindCSSSrc} alt="Tailwind CSS" width={24} height={24} />
);
