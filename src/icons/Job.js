import { SvgIcon } from "@mui/material";

function JobIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M0 9h15v15h9V.0000019L15 0H0v9Z" />
      <circle r="6.5" transform="matrix(-1 0 0 1 6.5 17.5)" />
    </SvgIcon>
  );
}

export default JobIcon;
