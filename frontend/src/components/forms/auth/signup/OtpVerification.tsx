import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import OtpSchema from "./OtpSchema.tsx";
import { useNavigate } from "react-router-dom";
import { Icons } from "@/components/icons/icons.ts";
import { useVerifyOtp, useResendOtp } from "@/hooks/useOtp";

const OtpVerification = ({ email }: { email: string }) => {
  const RefreshIcon = Icons.RefreshIcon;
  const Mail = Icons.Mail;
  const navigate = useNavigate();

  const verifyOtpMutation = useVerifyOtp();
  const resendOtpMutation = useResendOtp();

  const form = useForm<z.infer<typeof OtpSchema>>({
    resolver: zodResolver(OtpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof OtpSchema>) => {
    verifyOtpMutation.mutate(
      { email, otp: data.otp },
      {
        onSuccess: () => {
          navigate("/dashboard", { replace: true });
        },
      },
    );
  };

  const resendCode = async () => {
    resendOtpMutation.mutate(email);
  };

  return (
    <Card className="mx-auto max-w-md">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader className="py-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 m-auto">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <CardTitle>Check your email</CardTitle>
          <CardDescription>
            We sent a verification code to{" "}
            <span className="font-medium">{email}</span>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="otp-verification">
                Verification code
              </FieldLabel>
              <Button
                type="button"
                onClick={resendCode}
                variant="outline"
                size="xs"
              >
                <RefreshIcon />
                Resend Code
              </Button>
            </div>
            <Controller
              name="otp"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <InputOTP
                    {...field}
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS}
                    id="otp-verification"
                    required
                  >
                    <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator className="mx-2" />
                    <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </Field>
        </CardContent>
        <CardFooter>
          <Field className="py-6">
            <Button
              disabled={verifyOtpMutation.isPending}
              type="submit"
              variant={"blue"}
              className="w-full"
            >
              {verifyOtpMutation.isPending && <Spinner />} Verify
            </Button>
          </Field>
        </CardFooter>
      </form>
    </Card>
  );
};

export default OtpVerification;
