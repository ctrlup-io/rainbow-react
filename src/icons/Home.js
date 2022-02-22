import { SvgIcon } from "@mui/material";

import RainbowLinearGradient from "./RainbowLinearGradient";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <RainbowLinearGradient />
      <path d="M24 12c0 1.5759-.3104 3.1363-.9134 4.5922-.6031 1.4559-1.487 2.7788-2.6013 3.8931s-2.4372 1.9982-3.8931 2.6013C15.1363 23.6896 13.5759 24 12 24c-1.5759 0-3.13629-.3104-4.5922-.9134-1.45591-.6031-2.77878-1.487-3.89308-2.6013S1.5165 18.0481.913445 16.5922C.310389 15.1363-1.4e-7 13.5759 0 12h24ZM7 0h10v10H7z" />
    </SvgIcon>
  );
}

export default HomeIcon;
