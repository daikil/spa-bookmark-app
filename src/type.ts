export type TagId = number;
export type Tag = {
  id: TagId;
  name: string;
};

export type Bookmark = {
  id: number;
  url: string;
  summary: string;
  tagIds: TagId[];
  updatedAt: string;
};

export type BookmarkList = Bookmark[];
