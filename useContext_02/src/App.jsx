import "./App.css";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/theme";
import Themebtn from "./components/Themebtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setTheme] = useState("light");

  function lightMode() { setTheme("light"); }
  function darkMode() { setTheme("dark"); }

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div
        className='w-full bg-[#f3f3f3] min-h-screen flex flex-col gap-2 justify-center items-center transition-colors duration-500'
      >
        <div className="flex justify-end w-[20vw]">
          <Themebtn />
        </div>

        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;