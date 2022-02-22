import { SvgIcon } from "@mui/material";

import RainbowLinearGradient from "./RainbowLinearGradient";

function AboutIcon(props) {
  return (
    <SvgIcon {...props}>
      <RainbowLinearGradient />
      <path d="M0 13h11v9H0zM13 13h11v9H13zM.00048828 2h24v9h-24z" />
    </SvgIcon>
  );
}

export default AboutIcon;
