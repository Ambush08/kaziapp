import AuthHeader from "../../components/auth/authHeader";
import LoginForm from "../../components/auth/loginForm";






const Login = () => {
    return(
        <section className="grid grid-cols-1 items-start h-full w-full lg:grid-cols-2 lg:items-center">
            <AuthHeader />
            <LoginForm />
        </section>
    )
}




export default Login;