import {  FormEvent, useState } from "react";
import { CloseButton } from "../../CloseButton/CloseButton";
import { ScreenshotButton } from "../../ScreenShotButton/ScreenButton";
import { FeedbackType, feedbackTypes } from "../../WidgetForm";
import { BackButton, FeedbackContentDivStyle, FeedbackContentHeaderStyle } from "./style";

interface FeedbackContentStepProps {
  type: FeedbackType
  back: (type: FeedbackType | null) => void
  onFeedbackSent: () => void
}

export function FeedbackContentStep({type, back, onFeedbackSent}: FeedbackContentStepProps){
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState<string>("")
  const feedbackTypeInfo = feedbackTypes[type]
  function handleSubmitFeedback(event:FormEvent){
    event.preventDefault()
    onFeedbackSent()
  }
  return(
    <>
      <FeedbackContentHeaderStyle>
            <span>
              <button onClick={()=> back(null)}>
                <BackButton  weight="bold"/>
              </button>
              <img 
              src={feedbackTypeInfo.image.source} 
              alt={feedbackTypeInfo.image.alt}
              />
              {feedbackTypeInfo.title}
            </span>
            <CloseButton/>
      </FeedbackContentHeaderStyle>
      <FeedbackContentDivStyle>
          <form onSubmit={handleSubmitFeedback}>
            <textarea placeholder="Conte com detalhes o que está acontecendo..." onChange={(event)=> setComment(event.target.value)}/>
            <footer>
              <ScreenshotButton
                screenshot = {screenshot}
                onScreenshotTook = {setScreenshot}
              />
              <button type="submit" className="button-submit" disabled={comment === ""}>
                  Enviar Feedback
              </button>
              
            </footer>
          </form>
      </FeedbackContentDivStyle>
    </>
  )
}