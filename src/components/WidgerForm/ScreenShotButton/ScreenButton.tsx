import { CameraButton, ScreenshotButtonStyle } from "./style";
import html2canvas from "html2canvas"
import { useState } from "react";
import { Loading } from "../../Loading/Loading";
import { Trash } from "phosphor-react";
import { TrashButton } from "../../Loading/style";

interface ScreenshotButtonProps { 
  onScreenshotTook: (screenshot: string | null) => void
  screenshot: string | null

}

export function ScreenshotButton({onScreenshotTook, screenshot}: ScreenshotButtonProps){
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot(){
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector("html")!)
    const base64image = canvas.toDataURL("image/png")
    onScreenshotTook(base64image)
    setIsTakingScreenshot(false)
  }

  if(screenshot){
    return(
      <TrashButton type="button" className="trash" style={
        {
          background: `url(${screenshot})`,
          backgroundPosition: `right bottom`,
          backgroundSize: 180,
        }
      }
      onClick={()=> onScreenshotTook(null)}
      >
        <Trash color="white" weight="fill"/>
      </TrashButton>
    )
  }

  return(
    <ScreenshotButtonStyle type="button" className="screenshot-camera" onClick={() => {handleTakeScreenshot()}}>
      {isTakingScreenshot ? <Loading/> : <CameraButton color="white"/>}
    </ScreenshotButtonStyle>
  )
}