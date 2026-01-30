import dns from "dns/promises";

export const isEmailDomainValid = async (email: any): Promise<boolean> => {
  const domain: string = email.split("@")[1];
  try {
    const mxRecords = await dns.resolveMx(domain);
    return mxRecords && mxRecords.length > 0;
  } catch (error) {
    return false;
  }
};
