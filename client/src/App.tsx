import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "./components/theme-provider";
import { Home } from "./pages/home";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
