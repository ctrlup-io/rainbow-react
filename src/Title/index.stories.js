import { Box } from "@mui/material";

import Title from ".";

export default {
  component: Title,
  title: Title.name,
};

export const Nominal = () => (
  <Title stainIndex={0}>Ctrl Up, une ESN singulière</Title>
);

export const WithVariant = () => (
  <Title stainIndex={1} variant="h4">
    Ctrl Up, une ESN singulière
  </Title>
);

export const WithBigFontSize = () => (
  <Title stainIndex={2} fontSize={116}>
    Ctrl Up, une ESN singulière
  </Title>
);

export const WithWrapping = () => (
  <Box maxWidth={64}>
    <Title stainIndex={3}>Ctrl Up, une ESN singulière</Title>
  </Box>
);
