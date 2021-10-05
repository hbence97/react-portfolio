import React from "react";

const Button = props => {
  const handleClick = () => {
    let acc = document.getElementsByClassName("experience-accordion-button");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.style.paddingTop = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          panel.style.paddingTop = "30px";
        }
      });
    }
  };

  return (
    <button
      className={`experience-accordion-button + ${props.className}`}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
