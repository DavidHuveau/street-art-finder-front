import React, { Component } from "react";
import SignInForm from "../../components/SigninForm/SigninForm";
import { connect } from "react-redux";
import { createSession } from "../../actions/authActionCreator";
import { Helmet } from "react-helmet";

class ProposalsSignIn extends Component {
  componentWillReceiveProps(nextProps) {
    const { token } = nextProps;
    if (token) {
      this.props.history.push("/validate");
    }
  }

  render() {
    const { createSession } = this.props;
    return (
      <>
        <Helmet>
          <title>Street Art Finder</title>
          <meta
            name="description"
            content="Sign in | Sign in to Street Art Finder"
          />
        </Helmet>
        <SignInForm onSubmit={createSession} />
      </>
    );
  }
}

const mapDispatchToProps = {
  createSession
};

const mapStateToProps = state => {
  const { auth } = state;
  return {
    token: auth.token
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProposalsSignIn);
