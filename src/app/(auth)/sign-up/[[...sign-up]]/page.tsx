import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <main>
        <main className= "flex h-screen w-full items-center justify-center">
                <SignUp/>
            </main>
    </main>
  )
}

export default SignUpPage