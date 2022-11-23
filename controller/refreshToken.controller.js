const User = require("../models/user");
const jwt = require("jsonwebtoken");

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.status(401);
  const refreshToken = cookies.jwt;
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });

  const foundUser = await User.findOne({ refreshToken }).exec();

  // Detected refresh token reuse!
  if (!foundUser) {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err) return res.status(403); //Forbidden
        console.log("attempted refresh token reuse!");
        const hackedUser = await User.findOne({
          username: decoded.name,
        }).exec();
        hackedUser.refreshToken = [];
        const result = await hackedUser.save();
        console.log(result);
      }
    );
    return res.status(403); //Forbidden
  }

  const newRefreshTokenArray = foundUser.refreshToken.filter(
    (rt) => rt !== refreshToken
  );

  // evaluate jwt
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) {
        console.log("expired refresh token");
        foundUser.refreshToken = [...newRefreshTokenArray];
        const result = await foundUser.save();
        console.log(result);
      }
      if (err || foundUser.username !== decoded.username)
        return res.status(403);

      // Refresh token was still valid
      const roles = Object.values(foundUser.roles);

      const token = jwt.sign({ _id: foundUser._id }, process.env.logingtoken, {
        expiresIn: "60s",
      });

      const newRefreshToken = jwt.sign(
        { username: foundUser._id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "12h" }
      );

      foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
      // refreshTokens.push(refreshToken);
      const result = await foundUser.save();
      console.log(result);
      // Saving refreshToken with current user
      foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];

      // Creates Secure Cookie with refresh token
      res.cookie("jwt", newRefreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000,
      });

      res.json({ roles, accessToken });
    }
  );
};

module.exports = { handleRefreshToken };
