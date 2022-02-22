import { SvgIcon } from "@mui/material";

import RainbowLinearGradient from "./RainbowLinearGradient";

function ContactIcon(props) {
  return (
    <SvgIcon {...props}>
      <RainbowLinearGradient />
      <path d="M0 0h24v9H0zM10 11v13H0V11zM35 24c0-1.4445-.2845-2.8749-.8373-4.2095-.5528-1.3346-1.3631-2.5472-2.3845-3.5687-1.0215-1.0214-2.2341-1.8317-3.5687-2.3845S25.4445 13 24 13c-1.4445 0-2.8749.2845-4.2095.8373-1.3346.5528-2.5472 1.3631-3.5687 2.3845-1.0214 1.0215-1.8317 2.2341-2.3845 3.5687S13 22.5555 13 24h22Z" />
    </SvgIcon>
  );
}

export default ContactIcon;
