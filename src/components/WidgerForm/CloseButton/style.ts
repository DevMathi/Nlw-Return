import { Popover } from "@headlessui/react";

import styled from "styled-components";

export const StyledButton = styled(Popover.Button)`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  color: white;
  background: none;
  border: none;
  &:hover{
    color: var(--purple);
  }
  .close-button{
    width: 1rem;
    height: 1rem;
    font-weight: bold;
  }
 
`
