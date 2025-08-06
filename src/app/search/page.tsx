"use client";

import { InputSearchTextField } from "@/components/InputSearchTextField";
import { Box } from "@mui/material";
import { TagCardList } from "@/components/TagCardList";
import { getAllTags } from "@/api";

export default function SearchPage() {
  const tags = getAllTags();

  return (
    <Box>
      <InputSearchTextField />
      <TagCardList tags={tags} />
    </Box>
  );
}
