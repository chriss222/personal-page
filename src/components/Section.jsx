import React, { forwardRef } from "react";

const Section = forwardRef(({ id, children, className }, ref) => {
  return (
    <section id={id} ref={ref} className={className}>
      {children}
    </section>
  );
});

export default Section;
