import React, { useRef } from "react";


function Cards(props) {
  const cardRef = useRef(null);
  const styleRef = useRef(null);

  function handleMouseMove(e) {
    const card = cardRef.current;
    const style = styleRef.current;

    const pos = [e.nativeEvent.offsetX, e.nativeEvent.offsetY];
    e.preventDefault();

    const l = pos[0];
    const t = pos[1];
    const h = card.offsetHeight;
    const w = card.offsetWidth;
    const px = Math.abs(Math.floor((100 / w) * l) - 100);
    const py = Math.abs(Math.floor((100 / h) * t) - 100);
    const pa = 50 - px + 50 - py;

    const lp = 50 + (px - 50) / 1.5;
    const tp = 50 + (py - 50) / 1.5;
    const px_spark = 50 + (px - 50) / 7;
    const py_spark = 50 + (py - 50) / 7;
    const p_opc = 20 + Math.abs(pa) * 1.5;
    const ty = ((tp - 50) / 2) * -1;
    const tx = ((lp - 50) / 1.5) * 0.5;

    const grad_pos = `background-position: ${lp}% ${tp}%;`;
    const sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`;
    const opc = `opacity: ${p_opc / 100};`;
    const tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`;

    const styleText = `
      .card:hover:before { ${grad_pos} }  /* gradient */
      .card:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
    `;

    card.classList.add("active");
    card.classList.remove("animated");
    card.style.transform = tf;
    style.innerHTML = styleText;
  }

  function handleMouseOut() {
    const card = cardRef.current;
    const style = styleRef.current;

    style.innerHTML = "";
    card.removeAttribute("style");
    card.classList.add("animated");
    card.classList.remove("active");
  }

  return (
    <div
      ref={cardRef}
      className="card animated"
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      style={{backgroundImage: `url(${props.img})`
      }}
    >
      {/* contenu de la carte */}
      <style ref={styleRef} />
      <div className="card-image">
  <img src={props.img} alt="magic" />
</div>
    </div>
  );
}

export default Cards;
