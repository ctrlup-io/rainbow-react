import { SvgIcon } from "@mui/material";

import RainbowLinearGradient from "./RainbowLinearGradient";

function CommunityIcon(props) {
  return (
    <SvgIcon {...props}>
      <RainbowLinearGradient />
      <g>
        <path d="M0 0h11v24H0z" />
        <circle r="5.5" transform="matrix(-1 0 0 1 18.5 5.5)" />
        <path d="m18.5 15-5.1962 9h10.3924L18.5 15Z" />
      </g>
    </SvgIcon>
  );
}

export default CommunityIcon;
