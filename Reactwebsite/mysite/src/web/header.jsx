import React from "react";
import { FaBars } from "react-icons/fa";

function Header(props) {
  return (
    <>
      <header>
        <section className="container-fluid main-container">
          <div className="row">
            <div className="col-7 p-3 text-center ">
              <img
                src="../img/logo.png"
                alt="logo"
                srcset=""
                className="image-fluid"
                height={75}
                width={128}
              />
            </div>
            <div className="col-5 p-3 text-center">
              <FaBars size={45} />
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
export default Header;
