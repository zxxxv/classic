import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setloginstate } from "../store";

let HeaderBar = styled.div`
    position: fixed;
    width: 100%;
    height: 45px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1300px;
    margin: auto;
    a {
        text-decoration: none;
        color: black;
    }
`
let Navbar_logo = styled.div`
    img {
        width: 180px;
        margin-top: 10px;
        margin-left: 30px;
    }
`
let Navbar_menu = styled.ul`
    display: flex;
    list-style: none;
    li {
        padding: 6px 14px;
    }
    li: hover {
        background-color: #E6E6FA;
        border-radius: 10px;
    }
`
let Navbar_login = styled.ul`
    display: flex;
    list-style: none;
    margin-right: 30px;
    li {
        padding: 6px 12px;
    }
    li: hover {
        background-color: #E6E6FA;
        border-radius: 10px;
    }
`
let Search = styled.input`
    border-radius: 20px;
    width: 250px;
    margin-left: 5px;
`

function Header() {

    let loginstate = useSelector((state) => state.loginstate)
    let dispatch = useDispatch()

    return (
        <HeaderBar>
            <Navbar_logo>
                <a href="#"><img src="image.png" /></a>
            </Navbar_logo>
            <Navbar_menu>
                <li><a href='#'>사이트 소개</a></li>
                <li><a href='#'>커뮤니티</a></li>
                <li><a href='#'>매거진</a></li>
                <Search />
            </Navbar_menu>
            <Navbar_login>
                {
                    loginstate === false ?
                        <>
                            <li><a onClick={() =>
                                dispatch(setloginstate(true))
                            }>로그인</a></li>
                            <li><a>회원가입</a></li>
                        </>
                        :
                        <>
                            <li><a onClick={() =>
                                dispatch(setloginstate(false))
                            }>로그아웃</a></li>
                        </>
                }
            </Navbar_login>
        </HeaderBar>
    )
}

export default Header;