import styled from "styled-components";

export const SelectedImageContainer = styled.div`

display: flex;
flex-direction: column;
margin: 16px 0 16px 0;
padding: 0 0px 0 40px;
background-color: #fff;

img {
  width: 100%;
  max-width: 480px;
  height: 300px;
  margin-bottom: 20px;
  border-radius: 8px;
}
h2 {
  font-size: 20px;
  margin-bottom: 10px;
}
.selected-image__buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  .button {
    position: absolute;
    right: 40px;
    top: 44%;
    
  }
}
.button--delete {
    width: 92%;
    height: 30px;
    background-color: #fff;
    border-color:#a7a7a7;
    border-radius: 4px;
    margin: 10px 38px 5px 0;
}

.icon-heart--red {
    color: #be0000 ;
    font-size: 20px;
}
.icon-heart--empty {
    font-size: 20px;
}
p {
  margin-bottom: 10px;
  font-size: 14px;
 margin-top: 0;
 color: #696969;
 font-weight: bold;
}
h3 {
  font-size: 16px;
  margin-bottom: 14px;
  text-align: justify;
  margin-right: 40px;
}

`;
export const InfoContainer = styled.div`

  span{
   
   float: right;
   overflow: hidden;
   margin-right: 40px;
    color: #111111;
    font-weight: bold;
  }
`
export const HorizontalLine = styled.div`
border-bottom: 2px solid #a7a7a7;
margin: 0px 38px 5px 0;
`;
