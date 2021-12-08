import styled from "styled-components";

const Card = ({pokemon, handleCardClick}) => {
    return (
        <CardWrapper onClick={handleCardClick} id={pokemon.id}>
            <img src={pokemon.image} alt="poke logo"/>
            <div>{pokemon.name}</div>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    text-align: center;
    outline: none;
    border-radius: 20px;
    border: 2px solid white;
    box-shadow: #E9EAE0 0px 5px 15px;
    transition: transform 0.3s;
    cursor: pointer;
    &:hover {
    transform: scale(1.05);
    }

    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media (max-width: 750px) {
        width: 50px;
        font-size: .3rem;
    }
    @media (max-width: 550px) {
        width: 50px;
        font-size: .3rem;
    }
`;

export default Card;