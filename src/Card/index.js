import { CardHeader, Card as MuiCard, Paper } from "@mui/material";
import { any, string } from "prop-types";

export default function Card({ icon, title, children, ...props }) {
  return (
    <MuiCard
      sx={{ position: "relative", overflow: "visible", mt: 4 }}
      {...props}
    >
      <CardHeader
        title={title}
        titleTypographyProps={{ variant: "h4" }}
        action={
          icon && (
            <Paper
              variant="outlined"
              sx={{
                display: "inline-flex",
                backgroundColor: "background.default",
                p: 2,
                position: "absolute",
                left: (theme) => theme.spacing(2),
                top: (theme) => theme.spacing(-4),
              }}
            >
              {icon}
            </Paper>
          )
        }
        sx={{ pt: 6, pb: 2 }}
      />
      {children}
    </MuiCard>
  );
}

Card.propTypes = {
  icon: any,
  title: string.isRequired,
  children: any.isRequired,
};

Card.defaultProps = {
  icon: null,
};
