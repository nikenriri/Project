import { message } from "antd";
import { batch } from "react-redux";

import * as API from "../../api";
import * as ActionTypes from "../action-types";
import * as AUTH from "../../auth";

// Config
import { APP_CONFIG } from "../../../config";

// Services
import { encryptFE } from "../../util";

// Redux Action
import * as ROOT_REDUX_ACTION from "../../../../../services/redux/actions";

export const auth_user_sign_in = (email, password, cb) => (dispatch) => {
  dispatch(ROOT_REDUX_ACTION.set_auth_loading_request());

  AUTH.sign_in(email, password)
    .then((response) => {
      const { status, msg } = response;

      if (status && status === 200) {
        const { currentUser, authProvider, emailVerified, email_verified } =
          response.data;

        if (emailVerified || email_verified) {
          batch(() => {
            dispatch(sso_user_sign_in_request(currentUser, authProvider));
          });
        } else {
          message.warning(
            "User in not authorised yet. Please check your email inbox to verify email address!"
          );
        }

        cb({ status: 200 });

        return null;
      } else {
        throw msg;
      }
    })
    .catch((err) => {
      dispatch(ROOT_REDUX_ACTION.unset_auth_loading_request());
      cb({ status: 404, err: `Error. Refresh page? ${err}` });
    });
};

export const sso_user_sign_in_request =
  (authid, authProvider) => (dispatch) => {
    API.getUserInfoByAuthID(authid, authProvider).then((data) => {
      const { status, user } = data;

      if (status === 500) {
        message.error("Error. Refresh page?");
      } else {
        batch(() => {
          dispatch(ROOT_REDUX_ACTION.unset_auth_loading_request());
          dispatch(sso_user_sign_in_success(user));
        });
      }
    });
  };

export const sso_user_sign_in_success = (user = {}) => {
  return {
    type: ActionTypes.SSO_USER_SIGN_IN,
    user,
  };
};

/**
 *
 * Need to redesign the function as the order come out
 * Uncaught ReferenceError: Cannot access 'sso_user_sign_out_request' before initialization
 */

// export const auth_user_sign_out = () => (dispatch) => {
//   dispatch(sso_user_sign_out_request());

//   AUTH.sign_out().then(() => {});
// };

// export const sso_user_sign_out_request = () => (dispatch) => {
//   dispatch(sso_user_sign_out_success());
// };

// export const sso_user_sign_out_success = () => {
//   return {
//     type: ActionTypes.SSO_USER_SIGN_OUT,
//   };
// };

export const sso_user_sign_up_request = (user, cb) => (dispatch) => {
  const { cusamid = "", email, name, password, contact } = user;

  dispatch(ROOT_REDUX_ACTION.set_auth_loading_request());

  API.checkCusamid(cusamid).then((res) => {
    const { status: am_status, msg: am_msg, user = [] } = res;

    if (am_status && am_status === 200 && user.length !== 0) {
      AUTH.sign_up_user_with_email_password(email, password)
        .then((response) => {
          const { status, msg } = response;

          if (status && status === 200) {
            const { currentUser, authProvider } = response.data;
            const authKey = {
              currentUser,
              authProvider,
            };

            API.authSignUpUser({
              authKey,
              cusamid,
              email,
              name,
              contact,
            })
              .then((res) => {
                const { status: res_status, msg: res_msg } = res;

                if (res_status && res_status === 200) {
                  dispatch(sso_user_sign_up_success());
                  cb({ status: 200 });
                } else {
                  cb({ status: 404, err: res_msg });
                  throw res_msg;
                }
              })
              .catch((err) => {
                dispatch(ROOT_REDUX_ACTION.unset_auth_loading_request());
                cb({ status: 404, err });
              });
          } else {
            throw msg;
          }
        })
        .catch((err) => {
          dispatch(ROOT_REDUX_ACTION.unset_auth_loading_request());
          cb({ status: 404, err });
        })
        .finally(() => {
          dispatch(ROOT_REDUX_ACTION.unset_auth_loading_request());
        });
    } else {
      cb({ status: 404, err: "Account Manager is not found" });
    }
  });
};

export const sso_user_sign_up_success = () => {
  return {
    type: ActionTypes.SSO_USER_SIGN_UP,
  };
};

export const sso_user_auth_rp_request = (email) => (dispatch) => {
  API.authRPRequest(email)
    .then(() => dispatch(sso_user_auth_rp_success()))
    .catch(() => dispatch(sso_user_auth_rp_success()));
};

export const sso_user_auth_rp_success = () => {
  return {
    type: ActionTypes.SSO_USER_RESET_PASSWORD_REQUEST,
  };
};

export const sso_user_auth_reset_user_password_request =
  (extra, password, cb) => (dispatch) => {
    try {
      const code = encryptFE(
        JSON.stringify({
          ...extra,
          password,
        }),
        APP_CONFIG.APP_MASTER_KEY
      );

      API.authResetUserPassword(code).then((res) => {
        const { status, msg } = res;

        if (status && status === 200) {
          dispatch(sso_user_auth_reset_user_password_success());
          cb({ status: 200 });
        } else {
          throw msg;
        }
      });
    } catch (err) {
      cb({ status: 404, err });
    }
  };

export const sso_user_auth_reset_user_password_success = () => {
  return {
    type: ActionTypes.SSO_USER_RESET_PASSWORD,
  };
};
