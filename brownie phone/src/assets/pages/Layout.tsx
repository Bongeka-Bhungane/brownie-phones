import React from 'react'
import { BrowserRouter, Link, Outlet, Routes, Route, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <Link to="">Home</Link>
        <Link to="">PriceList</Link>
        <Link to="">CAshOut</Link>
      </nav>

      <Outlet />

      <footer>this is my footer</footer>
    </>
  );
}
