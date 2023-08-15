import Link from "next/link";
import React from "react";
const Nav = () => {
  return (
    <header>
      <p className="flex justify-center items-center p-4 bg-blue-500">
        Call Us For Veterinary Support: +977-9861859764
      </p>
      <div className=" flex justify-center space-x-20 p-4 font-bold">
        <a href=""> Logo </a>
        <Link href="./">Home</Link>
        <a href="/About">About</a>
        <Link href="/Services">Services</Link>
        <Link href="/Breeds">Breeds</Link>
        <Link href="/Shop">Shop</Link>
        <Link href="/Gallery">Gallery</Link>
        <Link href="/Contact">Contact</Link>
        <form>
          <input
            type="search"
            id="default-search"
            class="space-x-4"
            placeholder="Search"
            required
          />
         
          <Link href="/Cart" className="rounded-lg space-x-5 dark:bg-blue-600">
            Cart
          </Link>
        </form>
      </div>
      <div className="w-50 h-22 lg:h-100  overflow-hidden">
<img src="https://img.freepik.com/free-photo/group-portrait-adorable-puppies_53876-64778.jpg"  className=" h-full w-full" alt=""></img>
</div>


    </header>
  );
};

export default Nav;
