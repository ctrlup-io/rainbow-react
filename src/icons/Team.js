import { SvgIcon } from "@mui/material";

function TeamIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M0 15h24v9H0z" />
      <circle cx="12" cy="6.5" r="6.5" />
    </SvgIcon>
  );
}

export default TeamIcon;
