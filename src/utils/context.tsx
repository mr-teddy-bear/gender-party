import React from "react";

export const Context = React.createContext<{
  setMessage: React.Dispatch<
    React.SetStateAction<{
      severity: "error" | "success";
      text: string;
    } | null>
  >;
} | null>(null);
