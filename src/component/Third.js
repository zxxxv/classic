import styled from "styled-components";

let Third3 = styled.div`
    width: 27%;
    text-decoration: none;
    text-align: center;
    // border: 1px solid black;
`
let Box = styled.div`
    width: 70%;
    margin: auto;
    font-size: 15px;
    // border: 1px solid black;
`
let Box2 = styled.div`
    text-align: left;
    p{
        margin-bottom: 8px;
    }
`
let Box3 = styled.div`
    border-radius: 15px;
    background-color: white;
    margin-bottom: 35px;
    : hover {
        background-color: #F6D8CE;
        cursor: pointer;
        transition: 0.3s;
    }
`
let Box4 = styled.div`
    margin: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    transition: 0.3s;
    padding-top: 15px;
    padding-bottom: 15px;
    a {
        text-decoration: none;
        color: black;
        display: block;
    }
`
let Copyright = styled.div`
    margin: auto;
    width: 70%;
    p {
        font-size: 12px;
        text-align: left;
    }
`
function Third() {
    return (
        <>

            <Third3>
                <Feedback />
                <Copyright><p>©️ 2022 ONE CLASSIC</p></Copyright>
            </Third3>
        </>
    )
}

function Feedback() {
    return (
        <>
            <Box>
                <Box2><p>⚡피드백</p></Box2>
                <Box3>
                    <Box4><a href="https://forms.gle/Qch5SPjMfjDTnd7P9">더 나은 서비스를 위한 피드백</a></Box4>
                </Box3>
            </Box>
            <Box>
                <Box2><p>📌오픈카톡</p></Box2>
                <Box3>
                    <Box4><a href="https://open.kakao.com/o/gyZx0Awe">오픈 카톡방 참여하기</a></Box4>
                </Box3>
            </Box>
        </>
    )
}

export default Third;