"use client";
import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image , NavbarMenuToggle , NavbarMenu , NavbarMenuItem} from "@nextui-org/react";
export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);



    const menuItems=[
      {
        aData:'الصفة الرئيسية',
        hrefData:'/'
      },
      {
        aData:"منتجاتي",
        hrefData:'/products',
      },
      {
        aData:"العمل معي",
        hrefData:'/work',
      }, 
    ]
    return(
        <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <Link href='/'>
          <NavbarBrand>
            <Image src='logo.png' alt='logo' width={100} height={100}/>
            <p className="font-bold text-inherit">MOHAMMED AYOUB JS</p>
          </NavbarBrand>          
          </Link>

        </NavbarContent>
  
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link  color="foreground" href="/">
              الصفحة الرئيسية
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/products" aria-current="page">
              منتجاتي
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/work">
              العمل معي
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="https://mostaql.com/u/MohammedAyoubJs" target="_blank">منصة مستقل</Link>
          </NavbarItem>
          <NavbarItem>
          <Link href="https://twitter.com/MohammedAyoubJs" target="_blank">
          <button className="cursor-pointer group block px-5 py-2 rounded-md bg-black text-white text-2xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
            <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-white">𝕏</span>
        </button>          
          </Link>

          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href={item.hrefData}
                size="lg"
              >
                {item.aData}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    )
}