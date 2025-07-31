"use client";

import { InputSearchTextField } from "@/components/InputSearchTextField";
import { Box } from "@mui/material";
import { TagCardList } from "@/components/TagCardList";
import { getAllTags } from "@/api";
import { useSearchText } from "@/context";

export default function SearchPage() {
  const { searchText, setSearchText } = useSearchText();
  const tags = getAllTags();

  return (
    <Box>
      <InputSearchTextField
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <TagCardList tags={tags} />
    </Box>
  );
}
