import * as v from "valibot";
import "@valibot/i18n/ja";

// i18n を有効化
v.setGlobalConfig({ lang: "ja" });

const UrlSchema = v.pipe(v.string(), v.url());

const SearchTextSchema = v.pipe(
  v.string(),
  v.minLength(1, "キーワードを入力してください"),
  v.maxLength(100, "キーワードは100文字以内で入力してください")
);

export const getErrorMessage = (parseResult: v.SafeParseResult<any>) => {
  return !parseResult.success ? v.flatten(parseResult.issues) : null;
};

export const validateInputUrl = (inputUrl: unknown) => {
  return v.safeParse(UrlSchema, inputUrl);
};

export const validateInputSearchText = (inputKeyword: unknown) => {
  return v.safeParse(SearchTextSchema, inputKeyword);
};
