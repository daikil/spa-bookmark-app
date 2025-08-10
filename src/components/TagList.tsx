import type { Tag, TagId } from '@/type';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Tooltip,
  Divider,
  Box,
  ListSubheader,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
  tags: Tag[];
  handleClickOpenEditDialog: (tag: Tag) => void;
  handleClickOpenAlertDialog: (tagId: TagId) => void;
};
export const TagList = (props: Props) => {
  return (
    <List
      className="max-w-[360px] md:max-w-[448px] mx-auto border rounded-md border-gray-300"
      subheader={<ListSubheader className="rounded-md">タグ一覧</ListSubheader>}
    >
      {props.tags.map((tag, index) => {
        return (
          <Box key={index}>
            {index != 0 && <Divider variant="fullWidth" component="li" />}
            <Tooltip title="編集する">
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => props.handleClickOpenAlertDialog(tag.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton
                  onClick={() => props.handleClickOpenEditDialog(tag)}
                >
                  <ListItemText id={'1'} primary={`${tag.name}`} />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          </Box>
        );
      })}
    </List>
  );
};
