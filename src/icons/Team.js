import { SvgIcon } from "@mui/material";

import RainbowLinearGradient from "./RainbowLinearGradient";

function TeamIcon(props) {
  return (
    <SvgIcon {...props}>
      <RainbowLinearGradient />
      <g>
        <path d="M0 15h24v9H0z" />
        <circle cx="12" cy="6.5" r="6.5" />
      </g>
    </SvgIcon>
  );
}

export default TeamIcon;
