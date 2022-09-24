import { styled } from "@mui/material/styles";

import { rainbowLinearGradient } from "../colors";

const Svg = styled("svg")({
  position: "aboslute",
  height: 0,
  width: 0,
});

export default function Rainbow() {
  return (
    <Svg>
      <linearGradient id="rainbow">
        {rainbowLinearGradient.map((stop) => (
          <stop key={stop[0]} offset={`${stop[0]}%`} stopColor={stop[1]} />
        ))}
      </linearGradient>
    </Svg>
  );
}
