interface OTPInterface {
    recipientName: string;
    recipientEmail: string;
    otp: string;
}
declare const sendOTP: ({ recipientName, recipientEmail, otp, }: OTPInterface) => Promise<import("nodemailer/lib/smtp-transport/index.js").SentMessageInfo>;
export { sendOTP };
//# sourceMappingURL=emailService.d.ts.map