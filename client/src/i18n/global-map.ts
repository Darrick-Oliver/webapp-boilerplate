import { makeZodI18nMap } from "zod-i18n-map";
import { t } from "i18next";

import type { z } from "zod";

export type ErrorCode = z.ZodIssueOptionalMessage["code"];

const errorMap = new Map(
  Object.entries({
    too_small: "error-too-small",
    too_big: "error-too-big",
  } satisfies Partial<Record<ErrorCode, string>>),
);

const getCount = (issue: z.ZodIssueOptionalMessage) => {
  switch (issue.code) {
    case "too_small":
      return Number(issue.minimum);
    case "too_big":
      return Number(issue.maximum);
    default:
      return undefined;
  }
};

const getOverride: z.ZodErrorMap = (issue) => {
  const count = getCount(issue);
  const stringId = errorMap.get(issue.code);
  if (stringId) {
    return { message: t(stringId, { count }) };
  }
  return { message: "" };
};

export const globalErrorMap: z.ZodErrorMap = (issue, ctx) => {
  const { message } = getOverride(issue, ctx);
  if (!message) {
    // Fallback to zod-i18n-map library
    return makeZodI18nMap({ ns: "" })(issue, ctx);
  }

  return { message };
};
