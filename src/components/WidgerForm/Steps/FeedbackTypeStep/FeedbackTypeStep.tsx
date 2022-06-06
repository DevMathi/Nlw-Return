import { CloseButton } from "../../CloseButton/CloseButton"
import { feedbackTypes, FeedbackType } from "../../WidgetForm"
import { FeedbackStep, FeedbackStepHeader } from "./style"

interface FeedbackTypeStepProps{
  feedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep({feedbackTypeChanged}: FeedbackTypeStepProps){
  return(
    <>
      <FeedbackStepHeader>
          <span>Deixe seu feedback</span>
          <CloseButton/>
      </FeedbackStepHeader>
      <FeedbackStep>
        {Object.entries(feedbackTypes).map(([key, value])=> {
            return (
              <button  type="button" key={key} onClick={() => {
                feedbackTypeChanged(key as FeedbackType)
              }
                }>
                <img src={value.image.source} alt={value.image.alt} />
                <span>
                  {value.title}
                </span>
              </button>
            )
          })}
      </FeedbackStep>
  </>
  )
}