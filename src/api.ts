import { BookmarkList, Tag } from "./type";
import bookmarks from "./data/bookmark.json";
import tags from "./data/tags.json";

export const getCountAllBookmarks = (): number => {
  return bookmarks.length;
};

/**
 * ブックマーク一覧を取得する。
 * bookmarks 配列を更新日時で降順にソートし、
 * 指定されたページ番号とオフセットに対応する部分配列を返す。
 *
 * @param pageNum - 現在のページ番号（1始まり）。
 * @param offSet - 1ページあたりの取得件数。
 * @returns 指定ページの更新順ブックマーク一覧。
 */
export const getBookmarks = (pageNum: number, offSet: number): BookmarkList => {
  return (
    bookmarks
      .sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      )
      // startIndex, startIndex + offset
      .slice((pageNum - 1) * offSet, (pageNum - 1) * offSet + offSet)
  );
};

/**
 * タグ一覧を取得する。
 * tags 配列をIDの昇順でソートして返す。
 *
 * @returns ID順にソートされたタグ一覧。
 */
export const getAllTags = (): Tag[] => {
  return tags.sort((a, b) => a.id - b.id);
};
