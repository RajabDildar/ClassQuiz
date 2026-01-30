import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
        min: 8,
    },
    role: {
        type: String,
        enum: ["student", "teacher"],
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
userSchema.post("findOneAndDelete", async function (doc) {
    if (doc) {
        await mongoose.model("EmailOtp").deleteMany({
            userId: doc._id,
        });
    }
});
const User = mongoose.model("User", userSchema);
export default User;
//# sourceMappingURL=User.js.map