import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding : 8px 16px;
    font-size : 16px;
    border-width : 1px;
    cursor : pointer;
`;

function Button(props){
    //상위 컴포넌트에서 이벤트와 타이틀을 얻음
    const {title, onClick} = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}
export default Button;