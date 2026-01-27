import bcrypt from "bcrypt";

const Hash = async (entry: string): Promise<string> => {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(entry, saltRounds);
  return hashed;
};

export default Hash;
