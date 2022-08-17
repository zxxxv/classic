import styled from 'styled-components';
import First from './First';

import Third from './Third';

let Body0 = styled.div`
    width: 100%;
    background-color: #E6E6FA;
    text-decoration: none;
    padding-top: 80px;
`
let Container = styled.div`
    height: 800px;
    width: 100%;
    margin: auto;
    max-width: 1300px;
    display: flex;
`

function Body() {
    return (
        <Body0>
            <Container>
                <First />
                <Third />
            </Container>
        </Body0>
    )
}

export default Body;