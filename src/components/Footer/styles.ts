import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
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
  width: calc(290% + 1.3px);
  height: 126px;
`;

export const SvgPath = styled.path`
  fill: #9e74d0;
`;
