import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";



export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left Div */}
         <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-teal-200 via-emerald-200 to-lime-100 transition-all duration-[1500ms] ease-in-out hover:from-lime-100 hover:via-emerald-200 hover:to-teal-200 hover:brightness-105 rounded-lg dark:text-white">Chillboy&apos;s</span>
            Blog
          </Link>
            <p className="text-sm mt-5">This is the official blog page of Soham. You can sign up 
            with your email and password
            or with Google.</p>
         </div>
         {/* Right Div */}
         <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div >
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div >
              <Label value="Your email" />
              <TextInput type="text" placeholder="name@company.com" id="email" />
            </div>
            <div >
              <Label value="Your password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone='tealToLime' type="submit">Sign Up</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Already have an account?</span>
            <Link to='/sign-in' className="text-blue-500">Sign in</Link>
          </div>
         </div>
      </div>
    </div>
  )
}
