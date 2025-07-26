import * as v from "valibot";
import "@valibot/i18n/ja";

// i18n を有効化
v.setGlobalConfig({ lang: "ja" });

const UrlSchema = v.pipe(v.string(), v.url());

export const getErrorMessage = (parseResult: v.SafeParseResult<any>) => {
  return !parseResult.success ? v.flatten(parseResult.issues) : null;
};

export const validateInputUrl = (inputUrl: unknown) => {
  return v.safeParse(UrlSchema, inputUrl);
};
