type SpriteImageProps = {
  alt: string;
  position: string;
  className?: string;
};

export function SpriteImage({
  alt,
  position,
  className = "",
}: SpriteImageProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`bg-[url('/images/home/tech-blog-sprite.png')] bg-[length:200%_200%] bg-no-repeat grayscale ${className}`}
      style={{ backgroundPosition: position }}
    />
  );
}
