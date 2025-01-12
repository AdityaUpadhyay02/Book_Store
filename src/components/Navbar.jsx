import React, { useEffect, useState } from 'react'
import Login from "../../src/components/Login"
function navbar() {
  // const [theme,setTheme] =useState(
  //   localStorage.getItem("theme")? localStorage.getItem("theme"): "light"
  // );
  // const element =document.documentElement;
  // useEffect(()=> {
  //   if(theme ==="dark"){
  //     element.classList.add("dark");
  //     localStorage.setItem("theme","dark");
  //     document.body.classList.add("dark");
  //   }
  //   else{
  //     element.classList.remove("dark");
  //     localStorage.setItem("theme","light");
  //     document.body.classList.remove("dark");
  //   }
  // })
  // const [sticky,setSticky]=useState(false)
  // useEffect()=>{
  //   if(window.scroll>0){
  //     setSticky(true);
  //   }
  //   else{
  //     setSticky(false);
  //   }
  // }
  // window.addEventListener(`scroll`,handleScroll)
  // return ()=>{
  //   window.removeEventListener(`scroll`,handleScroll)
  // }
    const navItem=(<>
     <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a href='/Courses'>Couses</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>)
  return (
   <>
   <div>
   <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 hover:bg-white">
     {navItem}
      </ul>
    </div>
    <a className=" text-2xl font-bold cursor-pointer px-4">BookStore</a>
  </div>
  <div className="navbaar">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
    {navItem}
     
    </ul>
  </div>
  <label className="input input-bordered flex items-center gap-2 mx-3">
  <input type="text" className="grow" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
<input type="checkbox" value="synthwave" className="toggle theme-controller"/>
  
  <div className="navbar-end">
    <a className="btn px-7 mx-2 hover:bg-white" onClick={()=> document.getElementById("my_modal_3").showModal()}>Login</a><Login/>
  </div>
  </div>
</div>
<hr />
   </div>
   </>
  )
}

export default navbar
