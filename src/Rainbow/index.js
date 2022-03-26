import { rainbowLinearGradient } from "../colors";

export default function Rainbow() {
  return (
    <svg>
      <linearGradient id="rainbow">
        {rainbowLinearGradient.map((stop) => (
          <stop key={stop[0]} offset={`${stop[0]}%`} stopColor={stop[1]} />
        ))}
      </linearGradient>
    </svg>
  );
}
