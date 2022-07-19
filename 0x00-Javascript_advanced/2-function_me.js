const welcomeMessage = (fullName) => {
  const inner = () => {
    alert('Welcome' + fullName)
  }
  return inner;
}
let guillaume = welcomeMessage('Guillaume')
let alex = welcomeMessage('Alex')
let fred = welcomeMessage('Fred')