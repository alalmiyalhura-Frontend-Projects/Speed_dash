import axios from "axios";

export default {
  get_notifications(context) {
    axios
      .get(`/notification`, {
        headers: {
          Authorization: "bearer" + localStorage.getItem("Speed_Dash_Token"),
          "cache-control": "no-cache",
          "Content-type": "application/json",
          Accept: "application/json",
          "Accept-Language": context.rootGetters["lang_module/lang"],
        },
      })
      .then((res) => {
        context.commit("set_notifications", res.data.data)
        context.commit("count_notifications", res.data.unread_notifications)
        // console.log(res);
      });
  },
  
};
