import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";

var app = createApp(App);

app.config.globalProperties.$filters = {
  evaluarNumero(num) {
    if (num % 2 == 0) {
      return "<span style='background-color:lightgreen'>" + num + "</span>";
    } else {
      return "<span style='background-color:crimson'>" + num + "</span>";
    }
  },
  multiplicarNumero(num) {
    var html = "";
    for (let i = 1; i <= 10; i++) {
      html += "<tr>";
      html +=  "<td>" + num + " * " + i + "</td><td>" + num * i + "</td>"
      html += "</tr>";
    }
    return html;
  },
};

app.use(router).mount("#app");
