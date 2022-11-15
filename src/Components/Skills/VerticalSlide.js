import styled from "styled-components";

export const VerticalSlideshow = ({
  content,
  reference,
  title,
  upValue,
  downValue,
  numElem,
  justifyContent,
  arr,
}) => {
  const halfContent = numElem - Math.round(numElem / 2);

  const changeSkill = (e) => {
    if (e.currentTarget.value === upValue) {
      reference.current.style.transition = "500ms ease-out all";
      reference.current.style.transform = `translateY(55px)`;
      reference.current.children[halfContent].style.opacity = 0.5;
      reference.current.children[halfContent].style.fontSize = "15px";
      reference.current.children[halfContent - 1].style.opacity = 1;
      reference.current.children[halfContent - 1].style.fontSize = "25px";
      reference.current.children[halfContent - 2].style.opacity = 0;
    } else if (e.currentTarget.value === downValue) {
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
    <CarouselDiv justifyContent={justifyContent} flexDirection={"column"} heightDiv={"170px"}>
      <h3>{title}</h3>
      <button value={upValue} onClick={changeSkill}>
        <ion-icon name="chevron-up-outline"></ion-icon>
      </button>

      <div>
        <Slide ref={reference}>{content}</Slide>
      </div>

      <button value={downValue} onClick={changeSkill}>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </button>
    </CarouselDiv>
  );
};

export const CarouselDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  justify-content: center;
  width: 820px;
  & h3 {
    color: #fff;
    font-size: 25px;
  }

  & button {
    background: none;
    border: none;
    cursor: pointer;
    z-index: 10;
  }

  & div {
    display: flex;
    flex-direction: ${(props)=>props.flexDirection};
    align-items: center;
    justify-content: ${(props) => props.justifyContent};
    overflow: hidden;
    height: ${(props)=>props.heightDiv};
    width: 300px;
  }
`;

export const Slide = styled.div`
`;
