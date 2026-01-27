import mongoose from "mongoose";
const Schema = mongoose.Schema;

const emailOtpSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    otpHash: {
      type: String,
      required: true,
    },
    otpExpiresAt: {
      type: Date,
      required: true,
      index: { expires: 0 },
    },
    attempts: {
      type: Number,
      default: 0,
      max: 5,
    },
  },
  { timestamps: true },
);

emailOtpSchema.pre("save", async function () {
  if (this.isNew) {
    await mongoose.model("EmailOtp").deleteMany({
      userId: this.userId,
      _id: { $ne: this._id },
    });
  }
});

export const EmailOtp = mongoose.model("EmailOtp", emailOtpSchema);
