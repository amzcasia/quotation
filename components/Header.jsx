import { Link, Outlet } from "react-router-dom"

export default function Header(){
    return(
        <>
        <nav className="flex px-5 py-2 text-lg font-semibold gap-x-5 bg-[#696969] print:hidden">
            <Link to="/"><span>Guest Info</span></Link>
            <Link to="/quotation"><span>Quotation</span></Link>
        </nav>
        <main>
            <Outlet />
        </main>
        </>
    )
}