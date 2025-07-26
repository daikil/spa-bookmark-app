"use client";

import { useState } from "react";
import { LinkTab } from "./LinkTab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { samePageLinkNavigation } from "./LinkTab";

export const Header = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (
      event.type !== "click" ||
      (event.type === "click" &&
        samePageLinkNavigation(
          event as React.MouseEvent<HTMLAnchorElement, MouseEvent>
        ))
    ) {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: "100%", marginBottom: 4 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        role="navigation"
      >
        <LinkTab label="Home" href="/" />
        <LinkTab label="Tags" href="/tags" />
      </Tabs>
    </Box>
  );
};
