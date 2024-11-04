export const scrollToSection = (ref) => {
  if (ref) {
    ref.scrollIntoView({ behavior: "smooth" });
  }
};
