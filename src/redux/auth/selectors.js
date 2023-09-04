export const selectUser = (state) => state.user;
export const selectToken = (state) => state.user.token;
export const selectIsAuth = (state) => state.user.isAuth;
export const selectRawData = (state) => state.user.body;
export const selectorBodyData = (state) => state.user.bodyData;
export const selectisLoading = (state) => state.user.isLoading;
export const selectBloodType = (state) => state.user.bodyData.blood;
export const selectAvatar = (state) => state.user.avatar;
