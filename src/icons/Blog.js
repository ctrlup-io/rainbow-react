import { SvgIcon } from "@mui/material";

import RainbowLinearGradient from "./RainbowLinearGradient";

function BlogIcon(props) {
  return (
    <SvgIcon {...props}>
      <RainbowLinearGradient />
      <path d="M0 2h12v9H0zM0 13h12v9H0zM24 2c-1.3132 0-2.6136.25866-3.8268.7612-1.2133.50255-2.3157 1.23915-3.2443 2.16773-.9286.92859-1.6651 2.03098-2.1677 3.24424C14.2587 9.38642 14 10.6868 14 12c0 1.3132.2587 2.6136.7612 3.8268.5026 1.2133 1.2391 2.3157 2.1677 3.2443.9286.9286 2.031 1.6651 3.2443 2.1677C21.3864 21.7413 22.6868 22 24 22V2Z" />
    </SvgIcon>
  );
}

export default BlogIcon;
