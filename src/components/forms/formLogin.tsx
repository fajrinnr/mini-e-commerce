import { Button } from "../buttons/button";
import styles from "./formLogin.module.sass";
import { useState } from "react";
import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import FacebookLogin, {
  ReactFacebookLoginInfo,
} from "react-facebook-login/dist/facebook-login-render-props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

interface ILoginProps {
  onSuccessLogin: (params: { accessToken: string }) => void;
}

export default function LoginPage(props: ILoginProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>LOGIN </h1>
        <form>
          <label htmlFor="username">USERNAME</label>
          <input
            className={`inputBox`}
            id="username"
            type="text"
            placeholder="enter username"
          />
          <label htmlFor="password">PASSWORD</label>
          <div className={`inputBox ${styles.passwordBox}`}>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="enter password"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              style={{ width: "20px", color: "#666666" }}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <div className={styles.rememberButtonSection}>
            <div className={styles.rememberMe}>
              <input type="checkbox" />
              <label>REMEMBER ME</label>
            </div>
            <Button
              title="Sign In"
              customStyle={{ backgroundColor: "#499D9E", color: "white" }}
              onClick={() =>
                props.onSuccessLogin({ accessToken: "loginManually" })
              }
            ></Button>
          </div>
        </form>
        <FacebookLogin
          appId={process.env.FACEBOOK_APP_ID}
          fields="name,email,picture"
          callback={(res: ReactFacebookLoginInfo) => {
            props.onSuccessLogin({ accessToken: res.accessToken });
          }}
          onFailure={(error) => console.log(error)}
          render={(renderProps: {
            onClick: (
              event: React.MouseEvent<HTMLDivElement, MouseEvent>
            ) => void;
          }) => (
            <div onClick={renderProps.onClick} className={styles.buttonSocial}>
              <Button
                title="Sign in with Facebook"
                withImage={
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{
                      width: "20px",
                      color: "white",
                      marginRight: "7px",
                    }}
                  />
                }
                customStyle={{ backgroundColor: "#3B5998", color: "white" }}
              ></Button>
            </div>
          )}
        />
        <GoogleLogin
          clientId={process.env.GOOGLE_CLIENT_ID}
          render={(renderProps) => (
            <div
              onMouseDown={renderProps.onClick}
              className={styles.buttonSocial}
            >
              <Button
                title="Sign in with Google"
                withImage={
                  <FontAwesomeIcon
                    icon={faGoogle}
                    style={{
                      width: "20px",
                      color: "white",
                      marginRight: "7px",
                    }}
                  />
                }
                customStyle={{ backgroundColor: "#ED402D", color: "white" }}
              ></Button>
            </div>
          )}
          buttonText="Login"
          onSuccess={(res: GoogleLoginResponse) =>
            props.onSuccessLogin({ accessToken: res.accessToken })
          }
          onFailure={(error: { error: string }) => console.log(error)}
          cookiePolicy="single_host_origin"
        />
      </div>
    </div>
  );
}
