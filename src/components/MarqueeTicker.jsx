import { MARQUEE_ITEMS } from '../data/constants';

export default function MarqueeTicker() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="bg-acid py-4 overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} className="font-display text-carbon text-2xl tracking-[0.2em] mx-6">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
