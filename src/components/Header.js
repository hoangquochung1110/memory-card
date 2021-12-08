import styled from 'styled-components';
import logo from '../assets/logo.png';
import Scoreboard from './Scoreboard/Scoreboard';

const Header = ({score, bestScore}) =>{
    return (
        <HeaderWrapper>
            <GameNameWrapper>
                <Logo src={logo} alt="poke logo" />
                <h1>MEMORY GAME</h1>
            </GameNameWrapper>
            <Scoreboard  score={score} bestScore={bestScore} />
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
`;

const GameNameWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    width: 80px;
    height: 80px;
    padding: 4px;
    min-height: 50px;
    min-width: 50px;
`;


export default Header;