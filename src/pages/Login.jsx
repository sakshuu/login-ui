import React from 'react'
import Rectangle from "./../assets/images/Rectangle.png";
import petals from "./../assets/images/petals.png";
import Frame from "./../assets/images/Frame.png";
import earth from "./../assets/images/earth.png";
import face from "./../assets/images/face.png";
import insta from "./../assets/images/insta.png";
import linkdin from "./../assets/images/linkdin.png";

const Login = () => {
  return <>
  <div class="container mx-auto p-8">
  <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4">

  <div className='sm:hidden md:inline'>
  <div class="relative">
    <img src={Rectangle} height={555} width={620} alt="" />
  <div class="absolute p-8 top-0 left-0">
    <img src={Frame}  className='' alt="" />

    <div className='mt-40'>
    <div className='text-5xl font-bold text-white'>100% Uptime😎</div>
      <div className='text-3xl text-slate-200'>Zero Infrastructure</div>
      <div className='text-3xl text-slate-200'> Management</div>
    </div>

      <div className='mt-36 flex justify-end content-end'>

        <div className='absolute ml-8 flex gap-1 bottom-0 left-0'>
      <img src={earth} className='p-1' alt="" />
      <p className='text-sm text-slate-100'>aesthisia.com</p>
        </div>

      </div>
        <div className='flex absolute bottom-0 right-0'>
      <img className='p-2' src={linkdin} alt=""/>
      <img className='p-2' src={face} alt=""/>
      <img className='p-2' src={insta} alt=""/>
        </div>
  </div>
</div>
  </div>
  <div>

      <div className="min-h-full  px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={petals}
            alt="Your Company"
          />
          <div className='flex justify-center items-baseline gap-2 '>

          <div className="mt-2 text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Welcome 
          </div>
<div className='text-green-600 text-3xl  font-bold'>back!</div>
          </div>
          <p className='text-center'>Glad to see you, Again!</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">

            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder='Enter Your name'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 p-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='Enter Your Password'
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                                <div className="text-sm">
                  <a href="#" className="font-semibold text-slate-400 ml-64 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-slate-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                shadow-lg shadow-slate-950/500"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          Don’t have an account yet?{' '}
            <a href="#" className="font-semibold leading-6 text-green-600  hover:text-green-600 ">
             Sign Up 
            </a>
          </p>
        </div>
      </div>

  </div>
</div>
</div>

  </>
}

export default Login