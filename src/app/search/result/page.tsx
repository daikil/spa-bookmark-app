'use client';

import type { BookmarkList } from '@/type';
import { useState, useEffect } from 'react';
import { Box, Typography, Pagination } from '@mui/material';
import { BookmarkGrid } from '@/components/BookmarkGrid';
import { getBookmarksBySearchText, getBookmarksByTagName } from '@/api';
import { useSearchParams } from 'next/navigation';
import { OFFSET } from '@/const';

export default function ResultPage() {
  const [pageCount, setPageCount] = useState<number>(0);
  const [bookmarkList, setBookmarkList] = useState<BookmarkList | null>(null);
  const [pageNum, setPageNum] = useState<number>(1);
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const tagName = searchParams.get('tagName');
  const [title, setTitle] = useState<string>('');

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPageNum(value);
  };

  useEffect(() => {
    if (search) {
      setTitle(`キーワード: ${search}`);
      const res = getBookmarksBySearchText(pageNum, OFFSET, search);
      console.log(res);

      setBookmarkList(res.list);
      setPageCount(Math.ceil(res.count / OFFSET));
    } else if (tagName) {
      setTitle(`タグ: ${tagName}`);
      const res = getBookmarksByTagName(pageNum, OFFSET, tagName);
      setBookmarkList(res.list);
      setPageCount(Math.ceil(res.count / OFFSET));
    }
    console.log(title);
  }, [pageNum]);

  return (
    <Box>
      <Box
        sx={{
          justifyContent: 'center',
          maxWidth: 1024,
          mx: 'auto',
        }}
      >
        <Typography gutterBottom variant="h5" component="div" sx={{ mb: 2 }}>
          {title}
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
