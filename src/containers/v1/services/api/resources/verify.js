import * as API_CONSTANT from '../constants'

export const verifyLink = (link) => (
  fetch(`${API_CONSTANT.fms_sso_path}/verify/link`, {
      method: 'POST',
      headers: API_CONSTANT.headers,
      body: JSON.stringify({
        link
      })
  })
  .then(res => res.json())
)