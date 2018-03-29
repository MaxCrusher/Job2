function getCookie(cookie_name) {
  const results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)')
  if (results) return unescape(results[2])
  return null
}
module.exports.getCookie = getCookie
function setCookie(name, value, exp_y, exp_m, exp_d, path, domain, secure) {
  let cookie_string = name + '=' + escape(value)

  if (exp_y) {
    const expires = new Date(exp_y, exp_m, exp_d)
    cookie_string += '; expires=' + expires.toGMTString()
  }
  if (path) cookie_string += '; path=' + escape(path)
  if (domain) cookie_string += '; domain=' + escape(domain)
  if (secure) cookie_string += '; secure'
  document.cookie = cookie_string
}
module.exports.setCookie = setCookie
