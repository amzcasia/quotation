import { useState } from 'react'
import Header from './components/Header'
import Init from './pages/Init'
import Home from './pages/Home'
import Quotation from './pages/Quotation'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from 'react-router-dom'
import ImageEntry from './components/ImageEntry'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Init />}/>
      <Route path="/quotation" element={<Quotation />}/>
    </Route>
  )
)


export default function App() {
  return(
    <>
    {/* <Header /> */}
    <RouterProvider router={router} />
    {/* <Init /> */}
    {/* <Home /> */}
    {/* <Quotation /> */}
    </>
  )
}

