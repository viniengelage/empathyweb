import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  width: 100%;
  z-index: 1;
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
  height: 157px;

  filter: drop-shadow(2px 3px 6px rgb(0 0 0 / 0.2));
`;

export const SvgPath = styled.path`
  fill: #ffffff;
`;
