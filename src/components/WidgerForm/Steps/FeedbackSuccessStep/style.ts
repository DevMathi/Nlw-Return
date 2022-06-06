import styled from "styled-components";

export const FeedbackSuccessStyle = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 2.5rem 0rem;
  width: 19rem;
  span{
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin-top: 0.5rem ;
    color: var(--text-color);
    font-family: Arial, Helvetica, sans-serif;
  }
  button{
    color: var(--text-color);
    font-family: Arial, Helvetica, sans-serif;
    padding: 0.5rem 1.5rem;
    margin-top: 1.5rem;
    background-color: var(--background-body);
    border-radius: 0.25rem;
    border: transparent;
    line-height: 1.5rem;
    &:hover{
      filter: brightness(1.5);
    }
    transition: background-color 0.5s linear;
  }

`