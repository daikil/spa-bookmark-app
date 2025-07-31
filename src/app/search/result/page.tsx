"use client";
import type { BookmarkList } from "@/type";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useSearchText } from "@/context";
import { BookmarkGrid } from "@/components/BookmarkGrid";
import { getBookmarksBySearchText, getCountBookmarksBySearchText } from "@/api";

export default function ResultPage() {
  const { searchText, setSearchText } = useSearchText();
  const OFFSET = 10;
  const [pageCount, setPageCount] = useState<number>(0);
  const [bookmarkList, setBookmarkList] = useState<BookmarkList | null>(null);
  const [pageNum, setPageNum] = useState<number>(1);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPageNum(value);
  };

  useEffect(() => {
    setPageCount(Math.ceil(getCountBookmarksBySearchText(searchText) / OFFSET));
    setBookmarkList(getBookmarksBySearchText(pageNum, OFFSET, searchText));
  }, [pageNum]);

  return (
    <Box>
      <Box>
        <Typography gutterBottom variant="h5" component="div">
          {searchText}
        </Typography>
        <BookmarkGrid bookmarkList={bookmarkList} />
      </Box>
    </Box>
  );
}
