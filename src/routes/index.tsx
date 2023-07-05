import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
const Init = React.lazy(() => import('@screens/index'));
const Home = React.lazy(() => import('@screens/home'));
const NotFound = React.lazy(() => import('@screens/notFound'));


export default <Routes>
  <Route path="/" element={<Init />}>
    <Route index={true} element={<Navigate to="home" replace={true} />} />
    <Route path="home" element={<Home />} />
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>