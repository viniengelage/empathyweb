import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  width: 100%;
`;

export const Wave = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
`;

export const Svg = styled.svg`
  position: relative;
  display: block;
  width: calc(111% + 1.3px);
  height: 59px;
`;

export const SvgPath = styled.path`
  fill: #ffffff;
`;
