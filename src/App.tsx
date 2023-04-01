import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/css/index.scss";
import { PageRouter } from "./components/Router";
import { queryClient } from "./utils/api";

function App() {
  return (
    <div className="App">
      <Router>
        <QueryClientProvider client={queryClient}>
          <PageRouter />
        </QueryClientProvider>
      </Router>
    </div>
  );
}

export default App;
