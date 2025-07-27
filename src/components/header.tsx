"use client";

import { useNavTabs } from "@/context";
import { LinkTab } from "./LinkTab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  const { navTabsValue, setNavTabsValue } = useNavTabs();
  const handleChange = async (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    console.log(newValue, event);

    setNavTabsValue(newValue);
    console.log(navTabsValue);
  };

  return (
    <Box
      sx={{ width: "100%", marginBottom: 4, borderBottom: "solid 1px grey" }}
    >
      <Box sx={{ maxWidth: 1024, margin: "0 auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 8px 0",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <BookmarksIcon color="primary" className="mr-1" />
            <Typography
              variant="body1"
              component="h1"
              className="font-bold text-gray-800"
            >
              ブックマーク
            </Typography>
          </Box>
          <Box>
            <IconButton
              aria-label="nav searchPage"
              size="small"
              onClick={() => {
                //setNavTabsValue();
                router.replace("/search");
              }}
            >
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
        <Tabs
          value={navTabsValue}
          onChange={handleChange}
          aria-label="nav tabs"
          role="navigation"
        >
          <LinkTab label="Home" href="/" onClick={() => router.replace("/")} />
          <LinkTab
            label="Tags"
            href="/tags"
            onClick={() => router.replace("/tags")}
          />
        </Tabs>
      </Box>
    </Box>
  );
};
