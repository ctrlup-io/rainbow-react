import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import React, { useState } from "react";
import { any, string } from "prop-types";

import colors from "../colors";

export default function CollapseCard({
  title,
  children,
  defaultExpanded = false,
  ...props
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Card {...props}>
      <CardHeader
        sx={{
          paddingLeft: 2,
          paddingRight: 2,
          paddingTop: 1,
          paddingBottom: 1,
        }}
        action={
          <IconButton
            sx={(theme) => ({
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              marginLeft: "auto",
              transition: theme.transitions.create("transform", {
                duration: theme.transitions.duration.shortest,
              }),
            })}
            onClick={toggle}
            aria-expanded={expanded}
            aria-label={expanded ? "show less" : "show more"}
          >
            <ExpandMoreIcon color="primary" />
          </IconButton>
        }
        title={title}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          sx={{
            backgroundColor: colors.WHITE[700],
          }}
        >
          {children}
        </CardContent>
      </Collapse>
    </Card>
  );
}

CollapseCard.propTypes = {
  title: string.isRequired,
  children: any.isRequired,
};
