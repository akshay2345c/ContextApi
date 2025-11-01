import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme) return savedTheme
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light"
});

// fuction to toggle theam 
const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };


  // save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme); // add attribute for CSS
  }, [theme]);

  // return Provider so all children can access context
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// custom hook for easy usage
export const useTheme = () =>  useContext(ThemeContext); 