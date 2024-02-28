import * as API_CONSTANT from "../constants";

export const getUserInfoByAuthID = (authid, authProvider) =>
  fetch(`${API_CONSTANT.fms_sso_path}/user/authid/getInfo`, {
    method: "POST",
    headers: API_CONSTANT.headers,
    body: JSON.stringify({
      authid,
      authProvider,
    }),
  }).then((res) => res.json());

export const authSignUpUser = (item) =>
  fetch(`${API_CONSTANT.fms_sso_path}/user/auth/signUp`, {
    method: "POST",
    headers: API_CONSTANT.headers,
    body: JSON.stringify(item),
  }).then((res) => res.json());

export const authRPRequest = (email) =>
  fetch(`${API_CONSTANT.fms_sso_path}/user/auth/reset/request`, {
    method: "POST",
    headers: API_CONSTANT.headers,
    body: JSON.stringify({
      email,
    }),
  }).then((res) => res.json());

export const authResetUserPassword = (code) =>
  fetch(`${API_CONSTANT.fms_sso_path}/user/auth/reset/password`, {
    method: "POST",
    headers: API_CONSTANT.headers,
    body: JSON.stringify({
      code,
    }),
  }).then((res) => res.json());

export const checkCusamid = (memid) =>
  fetch(`${API_CONSTANT.fms_sso_path}/user/getInfo/memid`, {
    method: "POST",
    headers: API_CONSTANT.headers,
    body: JSON.stringify({
      memid,
    }),
  }).then((res) => res.json());

// export const checkCusamid = (memid) =>
//   fetch(`${API_CONSTANT.fms_sso_path}/user/getInfo/memid`, {
//     method: "POST",
//     headers: API_CONSTANT.headers,
//     body: JSON.stringify({
//       memid,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("Data dari API:", data);
//     });
