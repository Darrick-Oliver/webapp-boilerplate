import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import {
  Form,
  FormControl,
  FormError,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const signInSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

type SignInType = z.infer<typeof signInSchema>;

export const SignIn = () => {
  const { t } = useTranslation();
  const form = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
  });

  const {
    formState: { errors },
  } = form;

  const onSubmit = (values: SignInType) => {
    console.log(values);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("boilerplate-signin-title")}</CardTitle>
        <CardDescription>{t("boilerplate-signin-desc")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="tw-space-y-8">
            <div className="tw-space-y-2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("username-label")}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormError error={errors.username} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("password-label")}</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormError error={errors.password} />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">{t("submit-label")}</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
