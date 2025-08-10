'use client';

import { InputSearchTextField } from '@/components/InputSearchTextField';
import { Box } from '@mui/material';
import { TagCardList } from '@/components/TagCardList';
import { getAllTags } from '@/api';
import { PATH_NAME } from '@/const';
import { useRouter } from 'next/navigation';

export default function SearchPage() {
  const tags = getAllTags();
  const router = useRouter();

  const handleClickTagCard = (tagName: string) => {
    const params = new URLSearchParams({
      tagName: tagName,
    });

    router.push(`${PATH_NAME.SEARCH_RESULT}?${params.toString()}`);
  };

  const pushToSearchResultPage = (searchText: string) => {
    const params = new URLSearchParams({
      search: searchText,
    });

    router.push(`${PATH_NAME.SEARCH_RESULT}?${params.toString()}`);
  };
  return (
    <Box>
      <InputSearchTextField pushToSearchResultPage={pushToSearchResultPage} />
      <TagCardList tags={tags} handleClickTagCard={handleClickTagCard} />
    </Box>
  );
}
