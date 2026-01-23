import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldSeparator,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import LoginFormSchema from "./LoginFormSchema.tsx";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof LoginFormSchema>) {
    setLoading(true);
    setTimeout(() => {
      console.log("You submitted the following values:", data);
      setLoading(false);
      navigate("/dashboard", { replace: true });
    }, 5000);
  }
  return (
    <div className="w-full max-w-md p-8 rounded-2xl shadow-sm bg-white">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Login</FieldLegend>
            <FieldDescription>Login to Your Account</FieldDescription>
            <FieldGroup>
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">Enter Your Email</FieldLabel>
                    <Input
                      {...field}
                      id="email"
                      aria-invalid={fieldState.invalid}
                      placeholder="John@exp.com"
                      autoComplete="off"
                      type="email"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="password">
                      Enter Your Password
                    </FieldLabel>
                    <Input
                      {...field}
                      id="password"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      type="password"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <FieldSeparator />
              <FieldDescription>
                Don't have an Account?{" "}
                <Link to="/auth/signup">Signup</Link>{" "}
              </FieldDescription>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button
              className="ml-auto"
              disabled={loading}
              variant={"blue"}
              type="submit"
            >
              {loading && <Spinner />} Login
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
};

export default Login;
