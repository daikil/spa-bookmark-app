"use client";
import type { Tag, TagId } from "@/type";
import { useState } from "react";
import { getAllTags } from "@/api";
import { TagList } from "@/components/TagList";
import { Box } from "@mui/material";
import { EditTagDialog } from "@/components/EditTagDialog";
import { DeleteTagDialog } from "@/components/DeleteTagDialog";

export default function TagsPage() {
  const [isOpenEditDialog, setIsOpenEditDialog] = useState<boolean>(false);
  const [isOpenAlertDialog, setIsOpenAlertDialog] = useState<boolean>(false);
  const [editingTag, setEditingTag] = useState<Tag | null>(null);
  const [deleteTagId, setDeleteTagId] = useState<TagId | null>(null);
  const tags = getAllTags();
  const handleClickOpenEditDialog = (tag: Tag) => {
    setEditingTag(tag);
    setIsOpenEditDialog(true);
  };
  const handleClickOpenAlertDialog = (tagId: TagId) => {
    setDeleteTagId(tagId);
    setIsOpenAlertDialog(true);
  };

  const handleCloseEditDialog = () => {
    setIsOpenEditDialog(false);
    setEditingTag(null);
  };
  const handleCloseAlertDialog = (isDelete: boolean) => {
    setIsOpenAlertDialog(false);
    if (isDelete) {
      console.log(deleteTagId);
    }
    setDeleteTagId(null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    console.log(formJson);
    handleCloseEditDialog();
  };

  return (
    <Box>
      <EditTagDialog
        open={isOpenEditDialog}
        editingTag={editingTag}
        handleClose={handleCloseEditDialog}
        handleSubmit={handleSubmit}
      />
      <DeleteTagDialog
        open={isOpenAlertDialog}
        deleteTagId={deleteTagId}
        handleClose={handleCloseAlertDialog}
      />
      <TagList
        tags={tags}
        handleClickOpenEditDialog={handleClickOpenEditDialog}
        handleClickOpenAlertDialog={handleClickOpenAlertDialog}
      />
    </Box>
  );
}
