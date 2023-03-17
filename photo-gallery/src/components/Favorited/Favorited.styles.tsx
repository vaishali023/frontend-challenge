import styled from "styled-components";

export const FavoriteImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`;
export const ImageCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  img {
    width: 100%;
    height: 200px;
    display: block;
    transition: transform 0.3s ease-out;
  }
  img:hover {
    transform: scale(1.05);
  }

  p {
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #696969;
    margin: 0;
    padding-top: 5px;

    strong {
      margin-bottom: 0;
      color: #111111;
    }
  }
`;
