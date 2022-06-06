import { CircleNotch } from "phosphor-react";
import styled from "styled-components";

export const LoadingStyle = styled.div`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const CircleIcon = styled(CircleNotch)`
  width: 1rem;
  height: 1rem;
  @keyframes spin {
    to{
      transform: rotate(360deg);
    }
  }
  animation: spin 1s linear infinite;
`

export const TrashButton = styled.button`
  padding: 0.12rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  border: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`