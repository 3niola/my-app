import styled from "styled-components";

export const HeroContainer = styled.div`
background: light blue;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 100px
position: relative;
z-index: 1;

// add b4 styles
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%
overflow: hidden;
`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: green;
`