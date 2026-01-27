import mongoose from "mongoose";
export declare const EmailOtp: mongoose.Model<{
    userId: string;
    otp: string;
    otpExpiresAt: number;
    attempts: number;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userId: string;
    otp: string;
    otpExpiresAt: number;
    attempts: number;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId: string;
    otp: string;
    otpExpiresAt: number;
    attempts: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userId: string;
    otp: string;
    otpExpiresAt: number;
    attempts: number;
}, mongoose.Document<unknown, {}, {
    userId: string;
    otp: string;
    otpExpiresAt: number;
    attempts: number;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    userId: string;
    otp: string;
    otpExpiresAt: number;
    attempts: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        userId: string;
        otp: string;
        otpExpiresAt: number;
        attempts: number;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        userId: string;
        otp: string;
        otpExpiresAt: number;
        attempts: number;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    userId: string;
    otp: string;
    otpExpiresAt: number;
    attempts: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: string;
    otp: string;
    otpExpiresAt: number;
    attempts: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=EmailOtp.d.ts.map