import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home } from "../views/Home";
import { MoreInfo } from "../views/MoreInfo";
import { LatestView} from "../views/LatestView";
import { TrendingsView } from "../views/TrendingsView";
import { UpComingView} from "../views/UpComingView";
import { Movie } from "../views/Movie";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} >
        <Route path="movie/:id" element={<Movie/>} />
        </Route>
        <Route path="trendings" element ={<TrendingsView/>}/>
        <Route path="latest" element={<LatestView/>}/>
        <Route path="upcoming" element={<UpComingView/>}/>
        <Route path="more-info/:movieId" element={<MoreInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
};
