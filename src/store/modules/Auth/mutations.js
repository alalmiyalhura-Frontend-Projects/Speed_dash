export default {
  // ============================= Set_User_Dataa
  set_userId(state, payload) {
    localStorage.setItem("Speed_Dash_User_Id", payload);
    state.user.id = payload;
  },
  set_token(state, payload) {
    localStorage.setItem("Speed_Dash_Token", payload);
    state.user.token = payload;
  },
  set_usertype(state, payload) {
    localStorage.setItem("Speed_Dash_User_Type", payload);
    state.user.usertype = payload;
  },
  set_userImage(state, payload) {
    localStorage.setItem("Speed_Dash_userImg", payload);
    state.user.image = payload;
  },
  set_userPhone(state, payload) {
    localStorage.setItem("Speed_Dash_userPhone", payload);
    state.user.phone = payload;
  },

  // ============================= Remove_User_Dataa
  remove_user_data(state) {
    localStorage.removeItem("Speed_Dash_User_Id");
    localStorage.removeItem("Speed_Dash_Token");
    localStorage.removeItem("Speed_Dash_User_Type");
    localStorage.removeItem("Speed_Dash_userImg");
    localStorage.removeItem("Speed_Dash_userPhone");
    state.user.id = null;
    state.user.token = null;
    state.user.image = null;
    state.user.usertype = null;
    state.user.phone = null;
  },
};
