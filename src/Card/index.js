import { CardHeader, Card as MuiCard, Box } from "@mui/material";
import { any, object, string } from "prop-types";

import colors from "../colors";

export default function Card({ icon, title, children, sx, ...props }) {
  return (
    <MuiCard
      {...props}
      sx={{ ...sx, position: "relative", overflow: "visible", marginTop: 4 }}
    >
      <CardHeader
        title={title}
        action={
          icon && (
            <Box
              sx={{
                borderColor: colors.WHITE[600],
                borderWidth: 1,
                borderStyle: "solid",
                backgroundColor: (theme) => theme.palette.background.default,
                padding: 2,
                position: "absolute",
                left: (theme) => theme.spacing(2),
                top: (theme) => theme.spacing(-4),
              }}
            >
              {icon}
            </Box>
          )
        }
        sx={{ paddingTop: 6 }}
      />
      {children}
    </MuiCard>
  );
}

Card.propTypes = {
  icon: any,
  title: string.isRequired,
  children: any.isRequired,
  sx: object,
};

Card.defaultProps = {
  icon: null,
  sx: {},
};
