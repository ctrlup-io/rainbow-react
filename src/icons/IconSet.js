import { Grid, Typography } from "@mui/material";

function IconSet({ icons = [], color = "primary" }) {
  return (
    <Grid container spacing={2} alignItems="center">
      {icons.map((Icon) => (
        <Grid item key={Icon.displayName}>
          <Icon fontSize="large" color={color} />
          <Typography>{Icon.displayName.replace("Icon", "")}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default IconSet;
