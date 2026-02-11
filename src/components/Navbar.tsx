import "../index.css";

import StarkLogo from "../assets/images/getstark-icon.jpg";

function Navbar() {
  return (
    <nav className=" flex justify-between px-30 py-3  bg-cream">
      <div>

        {/* DIV OF THE LOGO */}
        <div>
          <a href="#">
            <img
              className="w-10 h-10 rounded-full"
              src={StarkLogo}
              alt="stark logo"
            />
          </a>
        </div>

        {/* DIV OF THE LINKS */}
        <div>
            
        </div>
      </div>

      <div className="flex gap-2">
        <button className="btn btn-outline uppercase">log in</button>
        <button className="btn btn-primary uppercase">request demo</button>
      </div>
    </nav>
  );
}

export default Navbar;
