
const Navbar = ()=>
{
   return( <div id="navBar">
        <div id="navL">
            <button className="navLinks"
                href="#">About</button>
            <button className="navLinks"
                href="#">Store</button>
        </div>
        <div id="navR">
            <div id="navRLinks">
                <button className="navLinks" href="#">Gmail</button>
                <button className="navLinks" id="imgL" href="#">Images</button>
            </div>
            <div id="navRbuttons">
                <button id="GAppsButton" href="#"></button>
                <button id="signin"
                    href="#/">Sign
                    in</button>
            </div>
        </div>
    </div>
   )
}

export default Navbar