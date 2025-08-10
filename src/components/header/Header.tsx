'use client';

import { LinkTab } from '../LinkTab';
import { Box, Tabs } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { PATH_NAME } from '@/const';
import { HeaderTitle } from './HeaderTitle';
import { SearchButton } from './SearchButton';

const getTabsValue = (pathName: string) => {
  switch (pathName) {
    case PATH_NAME.HOME:
      return 0;
    case PATH_NAME.TAGS:
      return 1;
    default:
      return -1;
  }
};

type Props = {
  disableTabs?: boolean;
};
export const Header = (props: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  const currentTabValue = getTabsValue(pathName);

  const handleClickTitle = () => router.push(PATH_NAME.HOME);
  const handleClickSearchButton = () => router.push(PATH_NAME.SEARCH);

  return (
    <Box
      sx={{ width: '100%', marginBottom: 4, borderBottom: 'solid 1px grey' }}
    >
      <Box sx={{ maxWidth: 1024, margin: '0 auto' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 1,
          }}
        >
          <HeaderTitle onClickTitle={handleClickTitle} />
          <SearchButton onClickTitle={handleClickSearchButton} />
        </Box>
        {props.disableTabs || (
          <Tabs value={currentTabValue} aria-label="nav tabs" role="navigation">
            <LinkTab
              label="Home"
              href={PATH_NAME.HOME}
              onClick={() => router.push(PATH_NAME.HOME)}
            />
            <LinkTab
              label="Tags"
              href={PATH_NAME.TAGS}
              onClick={() => router.push(PATH_NAME.TAGS)}
            />
          </Tabs>
        )}
      </Box>
    </Box>
  );
};
