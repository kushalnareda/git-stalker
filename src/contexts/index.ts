import { createContext } from 'react';

interface ColorModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
});

export default ColorModeContext;
