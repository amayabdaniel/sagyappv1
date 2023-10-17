import { useState } from "react"
import Pregunta1 from "./Pregunta1"
import Pregunta2 from "./Pregunta2"
import Pregunta3 from "./Pregunta3"

const Form = () => {
  const [step, setStep] = useState(0)

  const FormTitles = ["Pregunta 1", "Pregunta 2", "Pregunta 3"]

  const StepDisplay = () => {
    if (step === 0) {
      return <Pregunta1 />
    } else if (step === 1) {
      return <Pregunta2 />
    } else if (step === 2) {
      return <Pregunta3 />
    } else {
      return <h6>Formulario terminado</h6>
    }
  }


  return (
    <div className="form">
      <div className="progressbar">
        <div style={{ width: step === 0 ? "33.3%" : step == 1 ? "66.6%" : "100%" }}>

        </div>
      </div>
      <div className="form-cotainer">
        <div className="Header">
          <h1>{FormTitles[step]}</h1>
        </div>
        <div className="body">{StepDisplay()}</div>
        <div className="footer">
          <button disabled={step == 0} onClick={() => {setStep((currPage) => currPage - 1)}}>Prev</button>
          <button disabled={step == FormTitles.length - 1} onClick={() => {setStep((currPage) => currPage + 1)}}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Form
