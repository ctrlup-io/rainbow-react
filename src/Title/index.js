import { Box, Typography } from "@mui/material";
import { string } from "prop-types";
import React from "react";

import Stain from "../Stain";

const SPACER = " ";

function Title({ children, stainIndex, ...props }) {
  if (!children) return null;
  const words = children.split(SPACER);
  return (
    <Box mb={4}>
      <Typography variant="h2" {...props}>
        {words.slice(0, -1).join(SPACER)}
        {SPACER}
        <Box
          component="span"
          display="inline-flex"
          flexDirection="column"
          data-testid="stain"
        >
          {words.at(-1)}
          <Stain index={stainIndex} />
        </Box>
      </Typography>
    </Box>
  );
}

Title.propTypes = {
  children: string,
};

export default Title;
