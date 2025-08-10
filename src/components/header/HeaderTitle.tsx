import { Box, Typography } from '@mui/material';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

type Props = {
  onClickTitle: () => void;
};
export const HeaderTitle = (props: Props) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <BookmarksIcon color="primary" className="mr-1" />
      <Typography
        variant="body1"
        component="h1"
        className="font-bold text-gray-800"
        onClick={props.onClickTitle}
      >
        ブックマーク管理
      </Typography>
    </Box>
  );
};
