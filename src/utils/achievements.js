import otp from "../assets/images/otp.webp";
import deposit from "../assets/images/deposit.webp";
import code from "../assets/images/code.webp";
import gamification from "../assets/images/gamification.webp";

const achievements = [
  {
    text: "Implemented OTP verification to enhance security across multiple user communication channels.",
    asset: otp,
    title: "OTP Verification",
  },
  {
    text: "Integrated multiple third-party payment providers, enabling a secure, streamlined checkout experience.",
    asset: deposit,
    title: "Payment Providers",
  },
  {
    text: "Developed a suite of custom, reusable components to standardize the UI and enhance maintainability across projects.",
    asset: code,
    title: "Custom Components",
  },
  {
    text: "Implemented gamification features and mini-games to drive user engagement, incorporating elements like rewards, progress tracking, and challenges.",
    asset: gamification,
    title: "Gamification",
  },
];

export default achievements;
