import { Popover } from "@headlessui/react";
import styled from "styled-components";

export const StyledPopover = styled(Popover)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  @media(min-width: 768px){
    bottom: 2.5rem;
    right: 2.5rem;
  }

  .button-icon{
    background-color: var(--purple);
    border: none;
    border-radius: 9999px;
    padding: 0rem 0.75rem;
    height: 3rem;
    color: white;
    display: flex;
    align-items: center;
    
    &:hover{
      .span-feedback{
        max-width: 20rem;
      }
    }
    
    span{
      max-width: 0px;
      overflow: hidden;
      transition: max-width 0.5s linear;
      span{
        padding-left: 0.5rem;
      }
    }
  }
  
  .icon{
    width: 1.5rem;
    height: 1.5rem;
    
  }
`