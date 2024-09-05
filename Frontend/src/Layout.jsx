import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";


export default function Layout() {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}