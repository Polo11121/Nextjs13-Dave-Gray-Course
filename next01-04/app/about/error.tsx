"use client";

import { useEffect } from "react";

const AboutError = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong: {error.message}</h2>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default AboutError;
