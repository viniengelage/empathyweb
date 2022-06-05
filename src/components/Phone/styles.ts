import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  width: 100%;
  padding-top: 48px;
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
  width: calc(113% + 1.3px);
  height: 164px;
`;

export const SvgPath = styled.path`
  fill: #9e74d0;
`;
