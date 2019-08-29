import React, { Component } from "react";
import { connect } from "react-redux";

export default ComposedComponent => {
  class Authentication extends Component {
    componentWillMount() {
      const { authenticated, history } = this.props;
      // console.log("requireAuth", authenticated, history);
      if (!authenticated) history.push("/signin");
    }

    componentWillUpdate() {
      const { authenticated, history } = this.props;
      if (!authenticated) history.push("/signin");
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      authenticated: state.auth.token ? true : false
    };
  };

  return connect(
    mapStateToProps,
    null
  )(Authentication);
};
