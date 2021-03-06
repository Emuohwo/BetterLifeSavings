import React from "react";
import styled from "styled-components";
import {SearchBar} from './Search'
import {IconCard} from './IconCard'
import {Subscribe} from './Subscribe'
import TopStories from './topstories'

const Div = styled.div`
  margin: 0;
  background:#388e3c;
`;
// const x = rgba(255, 255, 255, 0.5);

const SideBar = () => (
  <Div className="col-sm-3">
    <SearchBar />
    <IconCard />
    <Subscribe />
    <TopStories />
  </Div>
);
export default SideBar;
