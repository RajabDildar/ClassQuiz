import bcrypt from "bcrypt";
const Hash = async (entry) => {
    const saltRounds = 10;
    const hashed = await bcrypt.hash(entry, saltRounds);
    return hashed;
};
export default Hash;
//# sourceMappingURL=Hash.js.map