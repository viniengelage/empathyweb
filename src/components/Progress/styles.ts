import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  width: 100%;
`;

export const Wave = styled.div`
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
`;

export const Svg = styled.svg`
  position: relative;
  display: block;
  width: calc(111% + 1.3px);
  height: 157px;
`;

export const SvgPath = styled.path`
  fill: #9e74d0;
`;
