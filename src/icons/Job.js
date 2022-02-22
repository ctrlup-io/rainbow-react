import { SvgIcon } from "@mui/material";

import RainbowLinearGradient from "./RainbowLinearGradient";

function JobIcon(props) {
  return (
    <SvgIcon {...props}>
      <RainbowLinearGradient />
      <g>
        <path
          fill-rule="evenodd"
          d="M0 9h15v15h9V.0000019L15 0H0v9Z"
          clip-rule="evenodd"
        />
        <circle r="6.5" transform="matrix(-1 0 0 1 6.5 17.5)" />
      </g>
    </SvgIcon>
  );
}

export default JobIcon;
