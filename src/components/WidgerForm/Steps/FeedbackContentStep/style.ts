import { ArrowLeft } from "phosphor-react";
import styled from "styled-components";

export const FeedbackContentHeaderStyle = styled.header`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  span{
    display: flex;
    font-size: 1.25rem;
    line-height: 1.5rem;
    align-items: center;
    gap: 0.5rem;
    button{
      top: 1.25rem;
      left: 2.5rem;
      position: absolute;
      color: #ccc;
      &:hover{
        color: var(--purple);
      }
    }
    img{
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  
`
export const FeedbackContentDivStyle = styled.div`
    display: flex;
    padding: 2rem 0rem;
    gap: 0.5rem;
    min-width: 100%;
    form{
      width: 100%;
      textarea{
        min-width: 304px;
        min-width: 100%;
        min-height: 112px;
        color: #e3e1e1;
        border: 1px solid rgb(254,226,226);
        background-color: transparent;
        border-radius: 0.375rem;
        padding: 0.7rem;
        resize: none;
        &::placeholder{
          color: #b4b4b4;
        }
        &:focus{
          border: solid 1px var(--purple) ;
          outline: none;
        }
        &::-webkit-scrollbar{
          background-color: transparent;
          width: 0.6rem;
          
        }
        &::-webkit-scrollbar-thumb{
          border-radius: 1rem;
          background-color: var(--purple);
        }
      }
        footer{
          display: flex;
          gap: 0.25rem;
          margin-top: 0.25rem;
          .button-submit{
            font-family: Arial, Helvetica, sans-serif;
            color: var(--color-text);
            padding: 0.5rem;
            background-color: var(--purple);
            border-radius: 0.5rem;
            border: transparent;
            flex: 1 1 0%;
            justify-content: center;
            align-items: center;
            font-size: 0.875rem;
            line-height: 1.25rem;
            transition:background-color 0.5s linear;
            &:hover{
              background-color:rgb(153,109,255);
            }
            &:focus{
              outline: none;
              border: 2px solid black;
            }
            &:disabled{
              opacity: 0.5;
            }
            &:disabled:hover{
              background-color: var(--purple);
            }
          }
        }
    }
`

export const BackButton = styled(ArrowLeft)`
  width: 1rem;
  height: 1rem;
`
