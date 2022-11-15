import styled from "styled-components";
import { CarouselDiv, Slide } from "../Skills/VerticalSlide";

export const HorizontalSlideshow = ({
  content,
  reference,
  title,
  nextValue,
  prevValue,
  numElem,
  justifyContent,
  arr,
}) => {
  const halfContent = numElem - Math.round(numElem / 2);

  const changeSkill = (e) => {
    if (e.currentTarget.value === nextValue) {
      reference.current.style.transition = "500ms ease-out all";
      reference.current.style.transform = `translateY(55px)`;
      reference.current.children[halfContent].style.opacity = 0.5;
      reference.current.children[halfContent].style.fontSize = "15px";
      reference.current.children[halfContent - 1].style.opacity = 1;
      reference.current.children[halfContent - 1].style.fontSize = "25px";
      reference.current.children[halfContent - 2].style.opacity = 0;
    } else if (e.currentTarget.value === prevValue) {
      reference.current.style.transition = "500ms ease-out all";
      reference.current.style.transform = "translateY(-55px)";
      reference.current.children[halfContent].style.opacity = 0.5;
      reference.current.children[halfContent].style.fontSize = "15px";
      reference.current.children[halfContent + 1].style.opacity = 1;
      reference.current.children[halfContent + 1].style.fontSize = "25px";
      reference.current.children[halfContent + 2].style.opacity = 0;
    }
    reference.current.addEventListener("transitionend", resetTransicion);
  };

  const resetTransicion = () => {
    const firstElement = reference.current.children[0];
    const index = reference.current.children.length - 1;
    const lastElement = reference.current.children[index];
    if (reference.current.style.transform === "translateY(55px)") {
      reference.current.children[halfContent - 2].style.opacity = 0.5;
      reference.current.insertBefore(lastElement, reference.current.firstChild);
      reference.current.style.transition = "none";
      reference.current.style.transform = `translateY(0px)`;
    } else {
      reference.current.children[halfContent + 2].style.opacity = 0.5;
      reference.current.appendChild(firstElement);
      reference.current.style.transition = "none";
      reference.current.style.transform = `translateY(0px)`;
    }
    reference.current.removeEventListener("transitionend", resetTransicion);
  };
  return (
    <CarouselDiv justifyContent={justifyContent} heightDiv={"450px"}>
      <h3>{title}</h3>
      <button value={nextValue} onClick={changeSkill}>
      <ion-icon name="chevron-back-outline"></ion-icon>
      </button>

      <div>
        <Slide ref={reference}>{content}</Slide>
      </div>

      <button value={prevValue} onClick={changeSkill}>
      <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
    </CarouselDiv>
  );
};
