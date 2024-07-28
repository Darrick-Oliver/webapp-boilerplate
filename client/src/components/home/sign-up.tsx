import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormError,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

const USERNAME_MIN_LENGTH = 4;
const USERNAME_MAX_LENGTH = 50;
const PASSWORD_MIN_LENGTH = 6;

const signUpSchema = z.object({
  username: z
    .string()
    .min(USERNAME_MIN_LENGTH)
    .max(USERNAME_MAX_LENGTH)
    .refine((u) => u.match(/^[0-9a-z]+$/i), {
      params: { i18n: "username-error-alphanumeric" },
    }),
  password: z.string().min(PASSWORD_MIN_LENGTH),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

type SignUpType = z.infer<typeof signUpSchema>;

export const SignUp = () => {
  const { t } = useTranslation();
  const form = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
  });

  const {
    formState: { errors },
  } = form;

  const onSubmit = (values: SignUpType) => {
    console.log(values);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("boilerplate-signup-title")}</CardTitle>
        <CardDescription>{t("boilerplate-signup-desc")}</CardDescription>
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
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("first-name-label")}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormError error={errors.firstName} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("last-name-label")}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormError error={errors.lastName} />
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
