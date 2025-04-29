import React from "react";

const Section = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <section id={id} className="min-h-screen max-w-screen">
      {children}
    </section>
  );
};

export default Section;
