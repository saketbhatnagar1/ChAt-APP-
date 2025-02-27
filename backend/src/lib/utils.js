import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true, // Prevents XSS attacks
    sameSite: "lax", // More compatible with third-party clients
    secure: process.env.NODE_ENV === "production", // Secure in production
  });

  return token;
};
