import { RouterProvider } from "react-router-dom";
import "./App.css";
import { route } from "./routes/Route";
import { useSelector } from "react-redux";
import { selectTheme } from "./features/theme/themeSlice";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

function App() {

  const { isDarkMode } = useSelector(selectTheme);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      <ToastContainer position="top-center" />
      <RouterProvider router={route} />
    </>
  );
}

export default App;
