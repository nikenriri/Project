import { push, goBack } from "connected-react-router";

/**
 * Navigate to a page from root "/"
 * @param {string} pageName Name of the page
 * @param {object} params Additional parameters to pass into the target page
 */
export const moveToMenuSelection = (pageName, params = {}) => dispatch => {
  dispatch(push("/" + pageName + "/", params));
};

/**
 * Navigate to a page from current location
 * @param {string} pageName Page Name
 */
export const moveToPage = (
  pageName,
  params = {  }
) => dispatch => {
  dispatch(push(pageName, params));
};

/**
 * Navigate to the previous page
 * @param {string} pageName Page Name
 */
export const goBackToPrev = () => dispatch => {
  dispatch(goBack(1));
};

/**
 * Navigate to the root of the app
 */
export const moveToRoot = () => dispatch => {
  dispatch(push("/"));
};