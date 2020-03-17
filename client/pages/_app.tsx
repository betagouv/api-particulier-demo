import React from "react";
import App, { AppContext } from "next/app";
import withRedux, { MakeStore, ReduxWrapperAppProps } from "next-redux-wrapper";
import "../css/style.css";
import { Provider } from "react-redux";
import { RootState } from "../store/root-reducer";
import { createStore } from "../store";

const makeStore: MakeStore = (initialState, options) => {
  if (options.isServer) {
    return createStore({
      user: {
        firstName: "croute"
      }
    });
  }
  return createStore(initialState);
};

class MyApp extends App<ReduxWrapperAppProps<RootState>> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
