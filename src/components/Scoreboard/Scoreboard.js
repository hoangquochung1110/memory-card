import styled from "styled-components";

const Scoreboard = ({score, bestScore}) =>{
    return(
        <ScoreboardWrapper>
            <div>Score: {score}</div>
            <div>Best Score: {bestScore}</div>
        </ScoreboardWrapper>
    )
}

const ScoreboardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export default Scoreboard