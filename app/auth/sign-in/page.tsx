import { signIn } from "@/auth"
import { auth } from "@/auth"
import { redirect} from "next/navigation"

export default async function SignIn() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign In</h2>
        <form
          action={async () => {
            "use server"
            await signIn("github", {redirectTo:"/"})
          }}
        >
          <button
            type="submit"
            className="w-full bg-black text-white font-medium py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
          >
            Sign in with GitHub
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-4">
          Don't have an account?{" "}
          <span className="underline decoration-dashed cursor-pointer hover:text-purple-700">
            Sign up with GitHub
          </span>
        </p>
      </div>
    </div>
  )
}