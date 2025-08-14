import Link from "next/link"
import { FaInstagram, FaFacebook } from "react-icons/fa";
import {  FaXTwitter } from "react-icons/fa6";
import { auth } from "@/auth";
import { signOut } from "@/auth";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import { login } from "@/lib/authentication";

async function TopBar() {
  const session= await auth()

  return (
    <div>
       <div className=" flex-row w-full bg-gray-800 text-white text-sm py-2 px-4 text-center">
      <div className="flex justify-between">
        {/*Social Icons */}
        <ul className="flex space-x-3 ">
            <li><Link href=""><FaInstagram size={20}/> </Link></li>
            <li><Link href=""><FaFacebook size={20}/> </Link></li>
            <li><Link href=""><FaXTwitter size={20}/> </Link></li>
        </ul>
        {/*Top bar options */}
        <ul className="flex space-x-2.5 text-[17px]">
        { session ?
           <>
              <li className="text-shadow-indigo-300">Hello, {session.user?.name}</li>
              <li>
                
              </li>
              <li>
                <form action={async () => {
                            "use server"
                            await signOut()
                          }} method="POST">
                  <button type="submit" className="hover:underline">
                    Sign Out
                  </button>
                </form>
              </li>
            </>
            :  <>
              <li>
                 <form action={async () => {
                            "use server"
                            await login()
                          }} >
                  <button type="submit" className="hover:underline">
                    Sign In
                  </button>
                </form>
              </li>
              <li>
                <Link href="/help" className="hover:underline">
                  Help
                </Link>
              </li>
            </>
        }
        </ul>
      </div>
    </div>
    </div>
  )
}

export default TopBar
