"use client";
import type { BookmarkList } from "@/type";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { BookmarkGrid } from "@/components/BookmarkGrid";
import { getBookmarksBySearchText, getCountBookmarksBySearchText } from "@/api";
import { useSearchParams } from "next/navigation";
import Pagination from "@mui/material/Pagination";

export default function ResultPage() {
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

  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const searchText = search?.toString() ?? "";

  useEffect(() => {
    setPageCount(Math.ceil(getCountBookmarksBySearchText(searchText) / OFFSET));
    setBookmarkList(getBookmarksBySearchText(pageNum, OFFSET, searchText));
  }, []);

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
        <Pagination
          className="my-4 flex justify-center"
          count={pageCount}
          onChange={handleChangePage}
        />
      </Box>
    </Box>
  );
}
