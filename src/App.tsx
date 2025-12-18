import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
             <motion.div
                initial={{ opacity: 0, x: -100 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
             >
                <Home />
             </motion.div>
        } />
        <Route path="/resume" element={
             <motion.div
                initial={{ opacity: 0, x: 100 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: 100 }} // Slide back to right
                transition={{ duration: 0.4, ease: "easeInOut" }}
             >
                <Resume />
             </motion.div>
        } />
        <Route path="/cv" element={
            <motion.div
                initial={{ opacity: 0, x: 100 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
             >
                <Resume />
             </motion.div>
        } />
        <Route path="/curriculum" element={
            <motion.div
                initial={{ opacity: 0, x: 100 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
             >
                <Resume />
             </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}
