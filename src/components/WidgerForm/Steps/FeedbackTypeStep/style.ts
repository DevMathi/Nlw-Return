import styled from "styled-components";

export const FeedbackStepHeader = styled.header`
  color: rgb(250,250,250);
  @media(min-width: 768px){
    width: auto;
  }
  header{
    color: rgb(250,250,250);
    span{
      font-size: 1.25rem;
      line-height: 1.5rem;
    }
  }
`
export const FeedbackStep = styled.div`
    display: flex;
    padding: 2rem 0rem;
    gap: 0.5rem;
    min-width: 100%;
    justify-content: space-around;
  button{
    border: none;
    background-color: #27272A;
    color: white;
    display: flex;
    flex-flow: column;
    align-items: center;
    border-radius: 1rem;
    padding: 1.25rem 0rem;
    width: 6rem;
    flex: 1 1 0%;
    gap: 0.5rem;
    border: 2px solid transparent;
    &:hover{
      border-color:var(--purple);
    }
    &:focus{
      border-color: var(--purple);
    }
    &:focus:outline{
      border-color: none;
    }
  }
`
