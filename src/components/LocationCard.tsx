import { Link } from "react-router-dom";

type LocationCardProps = {
  to: string;
  children: string;
  /** Single-line cards (region names) are shorter than two-line service cards. */
  compact?: boolean;
};

/** Flat grey link tile used on the Our Presence and region pages. */
function LocationCard({ to, children, compact = false }: LocationCardProps) {
  return (
    <Link
      to={to}
      className={`flex h-full items-center justify-center border border-neutral-200 bg-neutral-50 px-7.5 text-center text-[20px] font-semibold leading-7.5 text-neutral-800 transition-colors hover:border-cyan-400 hover:bg-white hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 motion-reduce:transition-none ${
        compact ? "min-h-16.25 py-4.25" : "min-h-23.75 py-4.25"
      }`}
    >
      {children}
    </Link>
  );
}

export default LocationCard;
