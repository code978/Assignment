import React from "react";
import "./styles.css";
import GoogleLogin from "react-google-login";
import { Box, Card, Typography, CardContent, Divider } from "@material-ui/core";

const App = () => {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  return (
    <div className="googleLogin">
      <Card variant="outlined" mr="auto">
        <CardContent>
          <Typography variant="h5">Enter the page</Typography>
          <Divider />
          <br />
          <Card component={Box}>
            <GoogleLogin
              clientId="303003232939-321bm79f3o49vq29rudlh171cn0jrprp.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
