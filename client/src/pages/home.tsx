import { Trans, useTranslation } from "react-i18next";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export const Home = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const { toggleTheme, theme } = useTheme();

  return (
    <div className="tw-flex tw-size-full tw-flex-col tw-items-center tw-justify-center tw-gap-4">
      <Button onClick={toggleTheme}>
        {theme === "light" ? (
          <Sun className="tw-size-4" />
        ) : (
          <Moon className="tw-size-4" />
        )}
      </Button>
      <h1 className="tw-text-xl tw-font-semibold">{t("boilerplate-title")}</h1>
      <p className="tw-text-base">
        <Trans i18nKey="boilerplate-count" count={count}>
          You have clicked {{ count }} time
        </Trans>
      </p>
      <Button onClick={() => setCount((count) => count + 1)}>
        {t("boilerplate-button-text")}
      </Button>
    </div>
  );
};
