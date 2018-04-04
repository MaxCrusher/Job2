export const Exit = (success) => {
  fetch('/exit').then(res => {
    res.json().then((data) => {
      success(data)
    })
  })
}

export const Registration = (user, success) => {
  fetch('/registration', {
    method: 'POST',
    body: JSON.stringify({ user }),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => {
    res.json().then(data => {
      success(data)
    })
  })
}

export const InitialCookie = (success) => {
  fetch('/a').then(res => {
    res.json().then((data) => {
      success(data)
    })
  })
}

export const SingIn = (user, success) => {
  fetch('/login', {
    method: 'POST',
    body: JSON.stringify({ user }),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => {
    res.json().then(data => {
      success(data)
    })
  })
}
