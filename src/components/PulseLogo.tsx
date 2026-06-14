interface PulseLogoProps {
  className?: string;
  /** White logo for dark backgrounds */
  light?: boolean;
}

export default function PulseLogo({ className = 'h-6 w-auto', light = false }: PulseLogoProps) {
  return (
    <img
      src="/pulse-logo.png"
      alt="Pulse"
      className={`object-contain ${light ? 'brightness-0 invert' : ''} ${className}`}
      draggable={false}
    />
  );
}
