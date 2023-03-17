import styled from "styled-components";
import { Tab, TabList } from "react-tabs";

import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

export const GlobalStyle: GlobalStyleComponent<any, {}> = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    font-family: 'Roboto', sans-serif;  }
`;

export const GalleryContainer = styled.div`
  margin: 0;
  padding: 10px 0 10px 10px;
  box-sizing: border-box;
  background-color: #fafafa;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 10px;

  h1 {
    color: #111111;
  }
`;

export const TabListStyle = styled(TabList)`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  padding: 10px 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  cursor: pointer;
`;

export const StyledTab = styled(Tab)`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &.react-tabs__tab--selected {
    border-color: #5d3fd3;
    color: #5d3fd3;
    outline: none;
  }
`;
