import { ThemeProvider } from "./components/theme-provider";
import { Home } from "./pages/home";

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
