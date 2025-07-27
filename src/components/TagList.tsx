import type { Tag, TagId } from "@/type";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

type Props = {
  tags: Tag[];
  handleClickOpenEditDialog: (tag: Tag) => void;
  handleClickOpenAlertDialog: (tagId: TagId) => void;
};
export const TagList = (props: Props) => {
  return (
    <List className="max-w-[360px] md:max-w-[448px] mx-auto bg-gray-200">
      {props.tags.map((tag, index) => {
        return (
          <ListItem
            key={index}
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
              <ListItemText id={"1"} primary={`${tag.name}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
