import React from "react";

function Card({menuData}) {
    return (
        <>
        <section className="main-card--container">
        {menuData.map((curElem) => {
        return (
            <>
              <section className="main-card-container">
                <div className="card-container">
                  <div className="card">
                    <div className="card-body">
                      <span className="card-number card-circle subtle">{curElem.id}</span>
                      <span className="card-author subtle">{curElem.category}</span>
                      <h2 className="card-title">{curElem.name}</h2>
                      <span className="card-description subtle">
                        {curElem.description}
                      </span>
                      <div className="card-read">Read</div>
                    </div>
                    <img src={curElem.image} alt="" className="card-media" />
                    <span className="card-tag subtle">Order Now</span>
                  </div>
                </div>
              </section>
            </>
          );
    } )}
    </section>
    </>
    )
  
}

export default Card;
