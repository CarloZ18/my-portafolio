import styled from "styled-components";
import { TitleSkills } from "../Skills/Skills";
import { Container } from "../Welcome/Welcome";
import img from "./assets/IMG_20220619_081025_250.png";
export const Contacts = () => {
  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} id="Contacts">
      <ProfileCard>
        <ProfileImg src={img} alt="profile image" width="300" />
        <ProfileContent>
          <h3>
            Carlos
            <br />
            Mata
          </h3>
          <h6>Front-end Developer</h6>
          <p>
            If you want to be in contact with me, you just have to click on the
            message button or write to me through my social networks, thanks to
            see my portfolio.<br/><br/> Happy and blessed day!
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://wa.me/${process.env.REACT_APP_CELLPHONE}`}
          >
            <MessageButton>Message</MessageButton>
          </a>
          <LinksContainer>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/carlos.ml18/?hl=es"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://m.facebook.com/carlos.g.matalopez?eav=AfYq_uNFZcJN8sPHUIO1XnLjOv3H8DsTty7ISNNXyXN_GdeIY0bcC4DijJKRPbsbUvU&paipv=0"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/carlos-mata-6bb44b18a/"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </LinksContainer>
        </ProfileContent>
      </ProfileCard>
    </Container>
  );
};
const ProfileImg = styled.img`
  position: absolute;
  left: -10%;
  bottom: 0;
  transition: 3s;
  background-size: cover;
  height: 650px;
  width: 650px;
  @media (max-width: 768px) {
    left: -35%;
  }
`;

const ProfileContent = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 0.8rem;
  color: #fff;
  transform: translateX(-450px);
  transition: 0.3s;
  font-size: 2rem;
  margin: 100px 0;
  & h6 {
    font-size: 1.5rem;
    color: #c51c3b;
  }
  & p {
    width: 350px;
    text-align: justify;
    font-size: 1rem;
    line-height: 20px;
    padding-left: 0.3rem;
    border-left: 2px solid #c51c3b;
  }
`;
const ProfileCard = styled.div`
  position: relative;
  width: 500px;
  height: 800px;
  background: ${(props) => props.theme.background};
  cursor: pointer;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2));
    opacity: 0;
    transition: 3s;
  }
  &:hover {
    ${ProfileContent} {
      transform: translateX(0);
    }
    ${ProfileImg} {
      transform: translateX(100px);
    }
    :after {
      opacity: 1;
    }
  }
  @media (max-width: 768px) {
    width:100vw;
  }
`;

const MessageButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #fff;
  background: #c51c3b;
  padding: 0.3rem 0.8rem;
  border-radius: 2px;
  cursor: pointer;
`;
const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  & a {
    text-decoration: none;
    color: #c51c3b;
  }
`;
