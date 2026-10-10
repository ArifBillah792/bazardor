const BN_DIGITS = "০১২৩৪৫৬৭৮৯";

// Shudhu digit bodlay: "9.0" → "৯.০"
export const bnDigits = (str) =>
  String(str).replace(/\d/g, (d) => BN_DIGITS[d]);

// Price format: 1850 → "১,৮৫০"
export function toBn(num) {
  return bnDigits(Number(num).toLocaleString("en-IN"));
}

// Navbar date: "শনিবার, ১০ অক্টোবর, ২০২৬"
export function bnDate() {
  return new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(new Date());
}

const UNITS = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

export const unitBn = (unit) => UNITS[unit] || unit;
export const unitLine = (unit) => `প্রতি ${unitBn(unit)}`;

// Change badge: ▲ ২.১% / ▼ ২.৯% / —০.০%
export function changeInfo(change) {
  const pct = bnDigits(Math.abs(change?.pct || 0).toFixed(1));

  if (change?.dir === "up") return { text: `▲ ${pct}%`, cls: "badge-success" };
  if (change?.dir === "down") return { text: `▼ ${pct}%`, cls: "badge-error" };
  return { text: `—${pct}%`, cls: "badge-ghost" };
}

// Detail page: min / max / average
export function priceStats(markets = []) {
  if (markets.length === 0) return { min: 0, max: 0, avg: 0 };

  const min = Math.min(...markets.map((m) => m.min));
  const max = Math.max(...markets.map((m) => m.max));
  const total = markets.reduce((sum, m) => sum + (m.min + m.max) / 2, 0);
  const avg = Math.round(total / markets.length);

  return { min, max, avg };
}
