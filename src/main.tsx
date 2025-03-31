
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Use the non-null assertion operator to ensure React 18 createRoot works correctly
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Failed to find the root element");
}
