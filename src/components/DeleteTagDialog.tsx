import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { TagId } from "@/type";

type Props = {
  open: boolean;
  deleteTagId: TagId | null;
  handleClose: (isDelete: boolean) => void;
};
export const DeleteTagDialog = (props: Props) => {
  return (
    <Dialog
      open={props.open}
      onClose={() => props.handleClose(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          本当に削除しますか？ブックマークに関連付けされたタグも削除されます。
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.handleClose(false)}>キャンセル</Button>
        <Button onClick={() => props.handleClose(true)} autoFocus>
          削除
        </Button>
      </DialogActions>
    </Dialog>
  );
};
