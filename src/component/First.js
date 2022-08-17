import styled from "styled-components";
import { useState } from 'react';
import Second from './Second';

let First1 = styled.div`
    width: 20%;
    text-align: center;
    border: 1px solid black;
    a {
        text-decoration: none;
    }
    a : hover{
        background-color: white;
        transition: 0.3s;
    }
`
let Second2= styled.div`
    width: 53%;
    text-decoration: none;
    text-align: center;
    border: 1px solid black;   
`
let Item = styled.div`
    width: 150px;
    height: 20px;
    font-size: 15px;
    color: black;
    margin-left: 100px;
    border-radius: 8px;
    margin-top: 5px;
`

function First() {

    let [category] = useState(['전체', '기타', '바이올린', '첼로', '피아노', '비올라', 
    '콘트라베이스', '플루트', '오보에', '바순', '색소폰', '클라리넷', '호른', '트럼펫'])
    let [Tab, setTab] = useState(0)

    return (
        <>  
            <First1>
                {
                    category.map((a, i) => {
                        return (
                            <a key={i} href="#"><Item>{a}</Item></a>
                        )
                    })
                }
            </First1>
            <Second2></Second2>
        </>

    )
}

export default First;