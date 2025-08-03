"use client";

import type { BookmarkList } from "@/type";
import { useEffect, useState } from "react";
import { BookmarkGrid } from "@/components/BookmarkGrid";
import { InputUrlField } from "@/components/InputUrlField";
import Pagination from "@mui/material/Pagination";
import { getBookmarks, getCountAllBookmarks } from "@/api";

export default function HomePage() {
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
    setPageCount(Math.ceil(getCountAllBookmarks() / OFFSET));
    setBookmarkList(getBookmarks(pageNum, OFFSET));
  }, [pageNum]);
  return (
    <>
      <InputUrlField />
      <BookmarkGrid bookmarkList={bookmarkList} />
      <Pagination
        className="my-4 flex justify-center"
        count={pageCount}
        onChange={handleChangePage}
      />
    </>
  );
}
