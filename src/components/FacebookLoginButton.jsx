import React from 'react';
import FacebookLogin from 'react-facebook-login';

function FacebookLoginButton() {
  const responseFacebook = (response) => {
    if (response.accessToken) {
      const accessToken = response.accessToken;
      console.log('Access Token: ' + accessToken);
    } else {
      console.log('Chưa cho phép truy cập');
      console.log(response);
    }
  };

  return (
    <FacebookLogin
      appId="652215836733174"
      fields="name,email,picture"
      callback={responseFacebook}
    />
  );
}

export default FacebookLoginButton;
