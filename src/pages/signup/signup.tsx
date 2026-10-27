import AuthHeader from "../../components/auth/authHeader";
import SignupForm from "../../components/auth/signup";




const Signup = () => {
    return(
        <section className="grid grid-cols-1 items-start h-full w-full lg:grid-cols-2 lg:items-center">
            <AuthHeader />
            <SignupForm />
        </section>
    )
}



export default Signup;
