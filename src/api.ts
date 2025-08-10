import { BookmarkList, Tag } from './type';
import bookmarks from './data/bookmark.json';
import tags from './data/tags.json';

/**
 * ブックマーク一覧を取得する。
 * bookmarks 配列を更新日時で降順にソートし、
 * 指定されたページ番号とオフセットに対応する部分配列を返す。
 *
 * @param pageNum - 現在のページ番号（1始まり）。
 * @param offSet - 1ページあたりの取得件数。
 * @returns 指定ページの更新順ブックマーク一覧。
 */
export const getBookmarks = (
  pageNum: number,
  offSet: number
): { count: number; list: BookmarkList } => {
  const result = bookmarks
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    )
    // startIndex, startIndex + offset
    .slice((pageNum - 1) * offSet, (pageNum - 1) * offSet + offSet);

  return { count: bookmarks.length, list: result };
};

export const getBookmarksBySearchText = (
  pageNum: number,
  offSet: number,
  searchText: string
): { count: number; list: BookmarkList } => {
  const result = bookmarks
    .filter((bookmark) => bookmark.summary.includes(searchText))
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );

  return {
    count: result.length,
    // startIndex, startIndex + offset
    list: result.slice((pageNum - 1) * offSet, (pageNum - 1) * offSet + offSet),
  };
};

export const getBookmarksByTagName = (
  pageNum: number,
  offSet: number,
  tagName: string
): { count: number; list: BookmarkList } => {
  const result = bookmarks
    .filter((bookmark) => !bookmark.tags.every((tag) => tag.name !== tagName))
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );

  return {
    count: result.length,
    // startIndex, startIndex + offset
    list: result.slice((pageNum - 1) * offSet, (pageNum - 1) * offSet + offSet),
  };
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
