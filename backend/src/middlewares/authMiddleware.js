const cooldownPeriod = 5000; // 1hour in miliseconds
const ipTimestamps = {};

export const checkAbuse = (req, res, next) => {
  const userIP = req.ip;
  const lastClaimTime = ipTimestamps[userIP];

  // IP based abuse prevention
  // check if user have already claim the coupon and the cooldown period has not finished
  if (lastClaimTime && Date.now() - lastClaimTime < cooldownPeriod) {
    const timeLeft = Math.ceil(
      (cooldownPeriod - (Date.now() - lastClaimTime)) / 1000
    );

    // return response with timeLeft
    return res.status(429).json({
      success: false,
      message: `Please wait ${timeLeft} seconds before claiming another coupon`
    });
  }

  // cookies based abuse prevention
  // prevent user if he/she is using the vpn for different ip address, cause browser cookies remain consistent even if the IP address changes
  if (req.cookies.couponClaimed) {
    return res.status(429).json({
      success: false,
      message: `You've already claimed a coupon. Please try again later!`
    });
  }

  // set the ip address
  ipTimestamps[userIP] = Date.now();

  res.cookie('couponClaimed', true, {
    maxAge: cooldownPeriod,
    httpOnly: true
  });

  next();
};
