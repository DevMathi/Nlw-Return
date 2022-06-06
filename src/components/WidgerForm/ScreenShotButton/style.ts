import { Camera } from "phosphor-react";
import styled from "styled-components";

export const ScreenshotButtonStyle = styled.button`
  padding: 1rem;
  background-color: #27272A;
  border-radius: 0.25rem;
  border: transparent;
  transition: background-color 0.5s linear;
  &:hover{
    background-color: rgb(63,63,70);
  }
`
export const CameraButton = styled(Camera)`
  width: 1.25rem;
  height: 1.25rem;
`