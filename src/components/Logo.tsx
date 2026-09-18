type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      className={`h-6 w-6 ${className}`}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M 128 128 C 128 198.692 70.692 256 0 256 C 0 185.308 57.308 128 128 128 Z M 128 128 C 198.692 128 256 185.308 256 256 C 185.308 256 128 198.692 128 128 Z M 0 0 C 70.692 0 128 57.308 128 128 C 57.308 128 0 70.692 0 0 Z M 256 0 C 256 70.692 198.692 128 128 128 C 128 57.308 185.308 0 256 0 Z"
      />
    </svg>
  );
}

