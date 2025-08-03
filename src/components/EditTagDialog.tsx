import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Tag } from "@/type";

type Props = {
  open: boolean;
  editingTag: Tag | null;
  handleClose: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};
export const EditTagDialog = (props: Props) => {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>タグ編集</DialogTitle>
      <DialogContent sx={{ paddingBottom: 0 }}>
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            id="id"
            name="id"
            className="hidden"
            defaultValue={props.editingTag?.id}
            readOnly
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="タグ名"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={props.editingTag?.name}
          />
          <DialogActions>
            <Button onClick={props.handleClose}>キャンセル</Button>
            <Button type="submit">保存</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};
