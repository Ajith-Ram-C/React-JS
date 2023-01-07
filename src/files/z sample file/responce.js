import React from "react";
import Home from "./home";
import Organicfood from "./organicfood";
import About from "./about";
import Form from "./form";
import Products from "./products";
import Testimonial from "./testimonial";
import Works from "./works";

export default function Responce(){
  return(
    <>
        <Home/>
        <Works/>
        <About/>
        <Form/>
        <Products/>
        <Organicfood/>
        <Testimonial/>
    </>
  )
}