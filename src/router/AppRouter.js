import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DashBoard } from "./DashBoard";
import { AuthForm } from "../components/AuthForm";
import { Navbar } from "../components/Navbar";
import { Home } from "../views/Home";
import { MoreInfoView } from "../views/MoreInfoView";
import { LatestView} from "../views/LatestView";
import { TrendingsView } from "../views/TrendingsView";
import { UpComingView} from "../views/UpComingView";
import { SingleMovieView } from "../views/SingleMovieView";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="movie/:id" element={<SingleMovieView/>}/>
        <Route path="trendings" element ={<TrendingsView/>}/>
        <Route path="latest" element={<LatestView/>}/>
        <Route path="upcoming" element={<UpComingView/>}/>
        <Route path="more-info/:movieId" element={<MoreInfoView/>}/>
      </Routes>
    </BrowserRouter>
  );
};
