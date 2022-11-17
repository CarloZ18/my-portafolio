import styled from "styled-components";
import { TitleSkills } from "../Skills/Skills";
import { Container } from "../Welcome/Welcome";
import img1 from "./assets/screenshot-xpudfx.csb.app-2022.11.15-14_27_57.png";
import img2 from "./assets/screenshot-pqmjgk.csb.app-2022.11.15-15_10_42.png";
import img3 from "./assets/screenshot-7n6c6w.csb.app-2022.11.15-15_13_19.png";
import img4 from "./assets/screenshot-0lldb8.csb.app-2022.11.15-15_15_53.png";
import img5 from "./assets/screenshot-2tjmr9.csb.app-2022.11.15-15_25_41.png";
import img6 from "./assets/screenshot-f1y9p4.csb.app-2022.11.15-15_26_55.png";
import { InfiniteLooper } from "./InfinityLooper";

export const Projects = ({ projectScroll }) => {
  const myProjects = [
    {
      name: "Random quote",
      url: "https://xpudfx.csb.app/",
      image: img1,
    },
    { name: "Markdown previewer", url: "https://pqmjgk.csb.app/", image: img2 },
    { name: "Drum Machine", url: "https://7n6c6w.csb.app/", image: img3 },
    {
      name: "Popular movies page",
      url: "https://f1y9p4.csb.app/",
      image: img6,
    },
    {
      name: "JavaScript calculator",
      url: "https://0lldb8.csb.app/",
      image: img4,
    },
    {
      name: "Pomodoro clock",
      url: "https://2tjmr9.csb.app/",
      image: img5,
    },
  ];
  const mapProjects = myProjects.map((project) => (
    <a key={project.name} href={project.url} rel="noreferrer" target="_blank">
      <ProjectCard initial={{ opacity: 1 }} animate={{ opacity: 0 }}>
        <ProjectImg src={project.image} alt="" />
        <ProjectInfo>
          <h3 className="project-name">{project.name}</h3>
        </ProjectInfo>
      </ProjectCard>
    </a>
  ));

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
      id={"Projects"}
    >
      {projectScroll > 1700 && (
        <>
          <TitleSkills
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, type: "spring" }}
          >
            My Projects
          </TitleSkills>
          <InfiniteLooper children={mapProjects} speed={15} direction="right" />
        </>
      )}
    </Container>
  );
};

export const ProjectImg = styled.img`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  transition: all 1s;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  font-size: 1em;
  z-index: 2;
  color: white;
  opacity: 0;
  transform: translateY(450px);
  transition: 0.5s;
  @media (max-width: 768px) {
    font-size: 1em;
    height: 130px;
    width: 200px;
  }
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 15px;
  overflow: hidden;
  scale: 0.9;
  border-color: ${(props) => props.theme.color};
  border-style: solid;
  border-width: 5px;
  &:hover ${ProjectImg} {
    transform: scale(1.2);
    transition: all 1s;
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 13px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000);
    z-index: 1;
    transition: 0.5s;
    opacity: 0;
  }
  &:hover:before {
    opacity: 1;
  }
  &:hover ${ProjectInfo} {
    opacity: 1;
    transform: translateY(150px);
  }
  @media (max-width: 768px) {
    &:before {
      width: calc(100% - 68%);
    }
    &:hover ${ProjectInfo} {
      transform: translateY(-80px);
    }
  }
`;

export const ProjectButton = styled.button`
  height: 50px;
  width: 100px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.background};
  border-color: #12bba4;
  border-style: solid;
  color: ${(props) => props.theme.color};
  font-size: 1em;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background: ${(props) => props.theme.background};
  }
  @media (max-width: 768px) {
    width: 100px;
    height: 50px;
  }
`;
