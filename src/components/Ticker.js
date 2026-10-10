import { changeInfo, toBn, unitBn } from "@/lib/bn";

const COLORS = {
  up: "text-error",
  down: "text-success",
  flat: "text-base-content/50",
};

const Ticker = ({ products }) => {
  const items = [...products, ...products];

  return (
    <div className="bg-base-100 border-b border-base-300 overflow-hidden">
      <div className="flex w-max animate-ticker">
        {items.map((p, i) => (
          <span
            key={i}
            className="flex items-center gap-2 px-4 py-2 text-sm whitespace-nowrap border-r border-base-300"
          >
            <span>{p.image}</span>
            <span className="font-medium">{p.nameBn}</span>
            <span className="text-base-content/70">
              {" "}
              {toBn(p.today)} টাকা/{unitBn(p.unit)}
            </span>
            <span className={COLORS[p.change?.dir] || COLORS.flat}>
              {changeInfo(p.change).text}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
