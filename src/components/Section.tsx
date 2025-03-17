import React from "react";

const Section = ({ children }: { children: React.ReactNode }) => {
  return <section className="min-h-screen max-w-screen">{children}</section>;
};

export default Section;
