import Taro, { Component } from "@tarojs/taro";
import { Provider } from "./taro-mobx/index";

import Store from "./store/index";
import Index from "./pages/index";

import "./app.scss";

const store = new Store();

class App extends Component {
  config = {
    pages: ["pages/index/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    return <Index />;
  }
}

Taro.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
