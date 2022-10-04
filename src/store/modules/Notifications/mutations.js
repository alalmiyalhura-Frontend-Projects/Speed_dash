export default {
  set_notifications(state, payload){
    state.notificationsList = payload;
  },
  count_notifications(state, payload){
    state.count = payload;
  }
};
