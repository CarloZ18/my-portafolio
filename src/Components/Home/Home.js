import { ContainerWelcome, TextWelcome } from "./UI/style";

export const Home = () => {
  return (
    <ContainerWelcome
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
    >
      <TextWelcome>hola</TextWelcome>
    </ContainerWelcome>
  );
};
