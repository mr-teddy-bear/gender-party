import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Context } from "../../utils/context";
import { MainRouter } from "./MainRouter";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export const PageRouter = () => {
  const [message, setMessage] = useState<{
    severity: "error" | "success";
    text: string;
  } | null>(null);

  return (
    <Context.Provider value={{ setMessage }}>
      <Routes>
        <Route path="/*" element={<MainRouter />} />
      </Routes>
      {message && (
        <Snackbar
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={() => setMessage(null)}
          open={!!message}
        >
          <Alert variant="filled" severity={message?.severity}>
            {message?.text}
          </Alert>
        </Snackbar>
      )}
    </Context.Provider>
  );
};
