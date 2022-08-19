import styled from "styled-components";

let Content_WD = styled.div`
    color: 	grey;
    width: 100%
    margin-left: 0px;
    border: 1px solid grey;
    P {
        text-align: left;
        font-size: 2px;
        margin: 0px;
        padding-left: 5px;
    }
`
//toLocaleString

function Time(props) {
    let timeSource = props.date
    let dateObj = new Date(timeSource);
    let timeString_KR = dateObj.toLocaleDateString("ko-KR", {timeZone: "Asia/Seoul"});
    return (
        <Content_WD>&#124;{timeString_KR}</Content_WD>
    )
}

export default Time;