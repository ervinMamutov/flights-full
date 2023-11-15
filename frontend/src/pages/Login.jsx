import './Login.css';

const Login = () => {
  return (
    <div className="login-box">
      <form onSubmit={(e) => handlerSubmit(e)} className="login-form"></form>
    </div>
  );
};

export default Login;
