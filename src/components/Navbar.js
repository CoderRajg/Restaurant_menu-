import React from "react";
// import Menu from './menuApi';

function Navbar({ ItemFilter, updatedList }) {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {updatedList.map(function (curElem) {
            return (
              <button
                className="btn-group__item"
                onClick={() => {
                  ItemFilter(curElem);
                }}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
