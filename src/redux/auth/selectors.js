export const selectUser = (state) => state.user;
export const selectToken = (state) => state.user.token;
export const selectIsAuth = (state) => state.user.isAuth;
export const selectRawData = (state) => state.user.body;
export const selectorBodyData = (state) => state.user.bodyData;
