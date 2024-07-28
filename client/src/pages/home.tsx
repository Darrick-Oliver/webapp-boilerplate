import { useTranslation } from "react-i18next";
import { Moon, Sun } from "lucide-react";
import { TabsContent } from "@radix-ui/react-tabs";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignIn } from "@/components/home/sign-in";
import { SignUp } from "@/components/home/sign-up";

export const Home = () => {
  const { t } = useTranslation();
  const { toggleTheme, theme } = useTheme();

  return (
    <div className="tw-flex tw-size-full tw-flex-col tw-items-center tw-justify-center tw-space-y-4">
      <Button onClick={toggleTheme}>
        {theme === "light" ? (
          <Sun className="tw-size-4" />
        ) : (
          <Moon className="tw-size-4" />
        )}
      </Button>
      <Tabs defaultValue="signin" className="tw-w-[400px] tw-space-y-4">
        <TabsList className="tw-grid tw-w-full tw-grid-cols-2">
          <TabsTrigger value="signin">{t("boilerplate-signin")}</TabsTrigger>
          <TabsTrigger value="signup">{t("boilerplate-signup")}</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <SignIn />
        </TabsContent>
        <TabsContent value="signup">
          <SignUp />
        </TabsContent>
      </Tabs>
    </div>
  );
};
