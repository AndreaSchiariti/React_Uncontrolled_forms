import { UncontrolledLogin } from "./UncontrolledLogin";

export default function App () {
  function onLogin(data) {
    console.log(data)
  }
  return(
    <>
      <UncontrolledLogin onLogin={onLogin} />
    </>
  )
}

