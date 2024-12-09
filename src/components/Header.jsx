
import Brand from "./Brand"
import Menu from "./Menu"
import { useState } from "react"
import { IoMenu } from "react-icons/io5";
import Nav from "./Nav";


function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToogleMenu =()=> {
    setIsOpen(!isOpen)
  }


  return (
    <div className=" sticky top-0 bg-white h-20 w-full shadow-lg z-10">
        <div className="max-w-5xl mx-auto px-5 h-full flex items-center justify-between ">
        
                <Brand />

                <Menu openMenu={isOpen} closeMenu={handleToogleMenu}>
                  <Nav />
                </Menu>

                <button className="p-1 md:hidden" onClick={handleToogleMenu}>
                <IoMenu className="size-7"/>
                  </button>

        </div>
    </div>
  )
}

export default Header