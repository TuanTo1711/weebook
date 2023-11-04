import { SignJWT, jwtVerify } from "jose";
import numeral from "numeral";

export function calculateDiscountedPrice(
  originalPrice: number,
  discountPercentage: number,
): number {
  if (originalPrice < 0 || discountPercentage < 0 || discountPercentage > 100) {
    throw new Error(
      "Giá gốc và tỷ lệ giảm giá phải lớn hơn hoặc bằng 0, và tỷ lệ giảm giá phải nằm trong khoảng 0 đến 100.",
    );
  }

  const discountAmount = (originalPrice * discountPercentage) / 100;
  const discountedPrice = originalPrice - discountAmount;

  return discountedPrice;
}

export function formatPrice(value: number) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return numeral(value).format("0,0");
}

export const getJWTSecret = () => {
  return new TextEncoder().encode(
    "/1GG982KJCRuqYnnj8PNBcMUkPkUd5zXBwa9bPPMELg=",
  );
};

export const generateToken = async (value: string) => {
  return await new SignJWT()
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .setSubject(value)
    .sign(getJWTSecret());
};

export async function verifyJwtToken(
  token: string,
  setValue: (value: string) => void,
) {
  try {
    const { payload } = await jwtVerify(token, getJWTSecret());
    setValue(payload.sub!);
  } catch (error) {
    return null;
  }
}
