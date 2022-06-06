import { ChatTeardropDots} from "phosphor-react"
import { Popover } from "@headlessui/react"
import { StyledPopover } from "./style"
import { WidgetForm } from "../WidgerForm/WidgetForm"

export function Widget(){
  return (
      <StyledPopover >
        <Popover.Panel>
          <WidgetForm/>
        </Popover.Panel>
        <Popover.Button className="button-icon">
          <ChatTeardropDots className="icon" color="white"/>
          <span className="span-feedback">
            <span></span>
            Feedback
            </span>
        </Popover.Button>
      </StyledPopover>
     )
}