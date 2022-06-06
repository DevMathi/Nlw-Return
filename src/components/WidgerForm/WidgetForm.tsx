import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep/FeedbackTypeStep";
import { WidgetFormStyled } from "./style";
import bugImg from "../../assets/bug.svg"
import ideaImg from "../../assets/idea.svg"
import thoughtImg from "../../assets/thought.svg"
import { useState } from "react";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep/FeedbackSuccessStep";

export const feedbackTypes = { 
  BUG: {
    title: "Problema",
    image:{
      source: bugImg,
      alt: "Imagem de um inseto"
    }
  },
  IDEA: {
    title: "Ideia",
    image:{
      source: ideaImg,
      alt: "Imagem de uma lampada"
    }
  },
  OTHER: {
    title: "Outro",
    image:{
      source: thoughtImg,
      alt: "Imagem de um balão"
    }
  },
}
export type FeedbackType = keyof typeof feedbackTypes 

export function WidgetForm(){
  const [feedBackType, setFeedBackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)
  function handleRestartFeedBack(){
    setFeedbackSent(false)
    setFeedBackType(null)
  }
  return(
    <WidgetFormStyled>
      { feedbackSent ? (<FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedBack}/>): (<>
        {!feedBackType ? (
        <FeedbackTypeStep feedbackTypeChanged= {setFeedBackType}/>
      ) : (
        <FeedbackContentStep type= {feedBackType} back={setFeedBackType} onFeedbackSent= {() => setFeedbackSent(true)}/>
      )}
      </>)}
      <footer>
        Feito com S2 pela Rocketseat
      </footer>
    </WidgetFormStyled>
  )
}