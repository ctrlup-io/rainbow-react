import { Typography } from "@mui/material";

import CollapseCard from ".";

export default {
  component: CollapseCard,
  title: CollapseCard.name,
};

export const WithTitleAndContent = () => (
  <CollapseCard title="Bienveillance" sx={{ maxWidth: 345 }}>
    <Typography>
      L'altruisme et le soin de l'autre sont des idées que nous aimons, la base
      de nos relations sont fondées sur cette idée qu'il faut rester
      bienveillant au sein de la communauté.
    </Typography>
  </CollapseCard>
);
