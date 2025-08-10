'use client';

import type { BookmarkList } from '@/type';
import { useEffect, useState } from 'react';
import { BookmarkGrid } from '@/components/BookmarkGrid';
import { InputUrlField } from '@/components/InputUrlField';
import Pagination from '@mui/material/Pagination';
import { getBookmarks } from '@/api';
import { OFFSET } from '@/const';

export default function HomePage() {
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
    const res = getBookmarks(pageNum, OFFSET);
    setPageCount(Math.ceil(res.count / OFFSET));
    setBookmarkList(res.list);
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
