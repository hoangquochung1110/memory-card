import styled from "styled-components";
import CardGrid from "./CardGrid/CardGrid";

const Main = ({pokemons, handleCardClick}) => {
    return (
        <MainWrapper>
            <CardGrid pokemons={pokemons} handleCardClick={handleCardClick} />
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    padding: 4rem;
    margin-bottom: 3.5rem;
`;

export default Main;