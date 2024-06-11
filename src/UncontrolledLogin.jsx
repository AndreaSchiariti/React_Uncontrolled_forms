export function UncontrolledLogin({onLogin}) {
  function handleLogin(event) {
    event.preventDefault()

    // const username = event.target.elements.namedItem("username").value
    // const password = event.target.elements.namedItem("password").value
    // const remember = event.target.elements.namedItem("remember").checked

    // const data = {
    //   username,
    //   password,
    //   remember,
    // }

    const formData = new FormData(event.target)

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on" ? true : false,
    }

    onLogin(data)
  }

  return(
    <form onSubmit={handleLogin}>
      <input type="text" name="username"/>
      <input type="password" name="password" />
      <input type="checkbox" name="remember" />
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  )
}

/* Utilizzando Il FormData possiamo ottenere tutti i dati direttamente in un oggetto senza che dobbiamo
richiamarli uno per uno e associarli ad una costante, rendendo anche il codice più snello.
Uno svantaggio è il fatto che la checkbox non ritorna un valore booleano quando lo richiameremo
nella creazione dell'oggetto data, avrà come valore "on" se attivata e null se non attivata, quindi
dovremmo implementare un operatore ternario per poter stampare il dato con valori booleani */