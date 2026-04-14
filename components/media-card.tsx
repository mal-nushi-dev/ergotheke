import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";

interface MediaCardBaseProps {
  href: string;
  imageSrc: string;
  altText: string;
  title: string;
  target?: string;
  rel?: string;
  cardClassName?: string;
  imageClassName?: string;
  overlayClassName?: string;
  gradientClassName?: string;
  titleContainerClassName?: string;
  titleClassName?: string;
  viewTransitionName?: string;
  imagePriority?: boolean;
}

interface MediaCardFillImageProps extends MediaCardBaseProps {
  imageFill: true;
  imageSizes: string;
  imageWidth?: never;
  imageHeight?: never;
}

interface MediaCardFixedImageProps extends MediaCardBaseProps {
  imageFill?: false;
  imageWidth: number;
  imageHeight: number;
  imageSizes?: string;
}

export type MediaCardProps = MediaCardFillImageProps | MediaCardFixedImageProps;

const baseCardClass =
  "group relative block rounded-lg overflow-hidden surface-card";
const baseImageClass =
  "object-cover transition-transform duration-500 ease-out group-hover:scale-105";
const baseOverlayClass =
  "absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20";
const baseGradientClass =
  "absolute bottom-0 w-full h-1/2 bg-linear-to-t from-black/50 to-transparent backdrop-blur-md [-webkit-mask-image:linear-gradient(to_top,black,transparent)] mask-[linear-gradient(to_top,black,transparent)]";
const baseTitleContainerClass = "absolute bottom-0 w-full p-4";
const baseTitleClass = "text-white font-bold tracking-tight";

function joinClasses(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export default function MediaCard({
  href,
  imageSrc,
  altText,
  title,
  target,
  rel,
  cardClassName,
  imageClassName,
  overlayClassName,
  gradientClassName,
  titleContainerClassName,
  titleClassName,
  imageFill,
  imageSizes,
  imageWidth,
  imageHeight,
  viewTransitionName,
  imagePriority,
}: MediaCardProps) {
  const imageContent = imageFill ? (
    <Image
      src={imageSrc}
      alt={altText}
      fill
      sizes={imageSizes}
      className={joinClasses(baseImageClass, imageClassName)}
      priority={imagePriority}
    />
  ) : (
    <Image
      src={imageSrc}
      alt={altText}
      width={imageWidth}
      height={imageHeight}
      sizes={imageSizes}
      className={joinClasses(baseImageClass, imageClassName)}
      priority={imagePriority}
    />
  );

  const cardContent = (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={joinClasses(baseCardClass, cardClassName)}
    >
      {imageContent}

      <div className={joinClasses(baseOverlayClass, overlayClassName)} />
      <div className={joinClasses(baseGradientClass, gradientClassName)} />

      <div
        className={joinClasses(
          baseTitleContainerClass,
          titleContainerClassName,
        )}
      >
        <span className={joinClasses(baseTitleClass, titleClassName)}>
          {title}
        </span>
      </div>
    </Link>
  );

  if (viewTransitionName) {
    return (
      <ViewTransition name={viewTransitionName}>{cardContent}</ViewTransition>
    );
  }

  return cardContent;
}
