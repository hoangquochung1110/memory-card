import styled from "styled-components";
import Card from "./Card";

const CardGrid = ({pokemons, handleCardClick}) =>{
    return (
        <CardGridWrapper>
            {pokemons.map((pokemon) => {
                return (
                    <Card key={pokemon.id} pokemon={pokemon} handleCardClick={handleCardClick} />
                )
            })}
        </CardGridWrapper>
    )
}

const CardGridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;

}
`;

export default CardGrid;