import { Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
  onClickTitle: () => void;
};
export const SearchButton = (props: Props) => {
  return (
    <Box>
      <IconButton
        aria-label="nav searchPage"
        size="small"
        onClick={props.onClickTitle}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};
