import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home } from "../views/Home";
import { MoreInfo } from "../views/MoreInfo";
import { NewView } from "../views/NewView";
import { TrendingsView } from "../views/TrendingsView";
import { WeekView } from "../views/WeekView";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="week" element={<WeekView/>}/>
        <Route path="trendings" element ={<TrendingsView/>}/>
        <Route path="new" element={<NewView/>}/>
        <Route path="more-info/:movieId" element={<MoreInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
};
