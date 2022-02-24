import { SvgIcon } from "@mui/material";

function ServiceIcon(props) {
  return (
    <SvgIcon {...props}>
      <circle r="4.5" transform="matrix(-1 0 0 1 4.5 6.5)" />
      <circle r="4.5" transform="matrix(-1 0 0 1 4.5 17.5)" />
      <path d="M24 12.25 11.25 4.67228V19.8277L24 12.25Z" />
    </SvgIcon>
  );
}

export default ServiceIcon;
