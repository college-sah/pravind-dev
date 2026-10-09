import React, { createContext, useContext, useState, useEffect } from 'react';
const themeConfigs = {
  cyan: {
    name: 'Cyan Blue',
    primary: '#06b6d4',
    text: 'text-cyan-400',
    border: 'border-cyan-500/40',
    bgSubtle: 'bg-cyan-950/40',
    gradient: 'from-cyan-400 to-blue-500',
    glow: 'rgba(6, 182, 212, 0.25)'
  },
  emerald: {
    name: 'Emerald Green',
    primary: '#10b981',
    text: 'text-emerald-400',
    border: 'border-emerald-500/40',
    bgSubtle: 'bg-emerald-950/40',
    gradient: 'from-emerald-400 to-teal-500',
    glow: 'rgba(16, 185, 129, 0.25)'
  },
  violet: {
    name: 'Electric Violet',
    primary: '#a855f7',
    text: 'text-purple-400',
    border: 'border-purple-500/40',
    bgSubtle: 'bg-purple-950/40',
    gradient: 'from-purple-400 to-indigo-500',
    glow: 'rgba(168, 85, 247, 0.25)'
  },
  amber: {
    name: 'Amber Gold',
    primary: '#f59e0b',
    text: 'text-amber-400',
    border: 'border-amber-500/40',
    bgSubtle: 'bg-amber-950/40',
    gradient: 'from-amber-400 to-orange-500',
    glow: 'rgba(245, 158, 11, 0.25)'
  }
};
const ThemeContext = createContext({
  accent: 'cyan',
  setAccent: () => {},
  accentColors: themeConfigs.cyan
});
export const ThemeProvider = ({
  children
}) => {
  const [accent, setAccent] = useState('cyan');
  useEffect(() => {
    // Persist choice in localStorage
    const saved = localStorage.getItem('pravind_portfolio_accent');
    if (saved && themeConfigs[saved]) {
      setAccent(saved);
    }
  }, []);
  const handleSetAccent = newAccent => {
    setAccent(newAccent);
    localStorage.setItem('pravind_portfolio_accent', newAccent);
  };
  return <ThemeContext.Provider value={{
    accent,
    setAccent: handleSetAccent,
    accentColors: themeConfigs[accent]
  }}>
      {children}
    </ThemeContext.Provider>;
};
export const useTheme = () => useContext(ThemeContext);