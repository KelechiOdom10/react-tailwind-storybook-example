import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../button/button";
import { Input } from "../input/input";
import { FC } from "react";

const schema = yup.object().shape({
  email: yup
    .string()
    .min(1, "Email is required")
    .email("Invalid email address")
    .required(),
  password: yup.string().min(8).max(32).required(),
});
export type FormValues = yup.InferType<typeof schema>;

export const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: FormValues) => {
    console.log({ data });
    reset();
  };

  return (
    <form
      className="flex flex-col space-y-4 max-w-xl"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <h2>Lets sign you in.</h2>
      <Input
        {...register("email")}
        error={errors.email?.message}
        placeholder="email"
        type="email"
      />
      <Input
        {...register("password")}
        error={errors.password?.message}
        placeholder="password"
        type="password"
      />
      <Button type="submit">Sign in</Button>
    </form>
  );
};
