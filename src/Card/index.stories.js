import { MailOutline } from "@mui/icons-material";
import { Typography, CardContent, CardActions, Button } from "@mui/material";

import Card from ".";
import Job from "../icons/Job";

export default {
  component: Card,
};

export const WithMuiIcon = () => (
  <Card
    title="Lizard"
    icon={<MailOutline color="action" />}
    sx={{ maxWidth: 345 }}
  >
    <CardContent>
      <Typography>
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="outlined">
        Learn More
      </Button>
    </CardActions>
  </Card>
);

export const WithCustomIcon = () => (
  <Card title="Lizard" icon={<Job color="action" />} sx={{ maxWidth: 345 }}>
    <CardContent>
      <Typography>
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="outlined">
        Learn More
      </Button>
    </CardActions>
  </Card>
);
