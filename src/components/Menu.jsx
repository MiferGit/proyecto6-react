import { cn } from "../utils"
import { IoClose } from "react-icons/io5";


function Menu({children, openMenu, closeMenu}) {




  return (
    <div className={cn('menu -top-full', openMenu && 'top-14')}>
        <button className="absolute top-3 right-5 p-5 md:hidden" onClick={closeMenu}>
        <IoClose className="size-6 mt-1 "/>
        </button>
        {children}
    </div>
  )
}

export default Menu