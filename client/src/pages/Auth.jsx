import React, {useState} from 'react'


const Auth = () => {
     
  const [activeForm, setActiveForm] = useState('signup');
  const [username, setusername] = useState("")
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  // Toggle form visibility
  const showForm = (form) => {
    setActiveForm(form);
  };
  
  const handleSignUp = async () =>{
    

  }

  const handleLogin = async ()=>{

  }

  return (
    <>
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="container max-w-5xl flex rounded-2xl shadow-lg overflow-hidden bg-gray-800">
        
        {/* Left Panel for Slogan and Welcome Message */}
        <div className="w-1/2 p-12 flex flex-col justify-center items-center bg-gray-900">
          <h1 className="text-4xl font-bold text-green-400 mb-4">Welcome to CodeX</h1>
          <p className="text-lg text-gray-400 leading-relaxed text-center">
            Your ultimate coding companion. Unlock the potential of coding with CodeX, a space where creativity meets technology.
          </p>
        </div>

        {/* Right Panel for Form */}
        <div className="w-1/2 p-12 relative">
          <div className="text-3xl font-bold text-green-400 text-center mb-8">CodeX</div>

          {/* Tabs for switching between Login and Signup */}
          <div className="flex justify-center mb-8">
          <button
              className={`px-4 py-2 font-semibold rounded-lg transition-colors ml-4 ${
                activeForm === 'signup'
                  ? 'bg-green-400 text-gray-900'
                  : 'text-gray-400 hover:bg-white/10'
              }`}
              onClick={() => showForm('signup')}
            >
              Signup
            </button>
            <button
              className={`px-4 py-2 font-semibold rounded-lg transition-colors ${
                activeForm === 'login'
                  ? 'bg-green-400 text-gray-900'
                  : 'text-gray-400 hover:bg-white/10'
              }`}
              onClick={() => showForm('login')}
            >
              Login
            </button>
           
          </div>

          {/* Login Form */}
          {activeForm === 'login' && (
            <form className="space-y-4">
              <div className="relative">
                <label htmlFor="login-email" className="block text-sm text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:border-green-400"
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div className="relative">
                <label htmlFor="login-password" className="block text-sm text-gray-400 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="login-password"
                  placeholder="Enter your password"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:border-green-400"
                  onChange={(e) => setpassword(e.target.value)}

                />
              
              </div>
              <button
              onClick={handleLogin}
                type="submit"
                className="w-full py-2 rounded-lg border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 transition"
              >
                Login
              </button>
            </form>
          )}

          {/* Signup Form */}
          {activeForm === 'signup' && (
            <form className="space-y-4">
              <div className="relative">
                <label htmlFor="signup-email" className="block text-sm text-gray-400 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:border-green-400"
                  onChange={(e) => setusername(e.target.value)}

                />
              </div>
              <div className="relative">
                <label htmlFor="signup-password" className="block text-sm text-gray-400 mb-1">
                 Email
                </label>
                <input
                  type="email"
                  placeholder="Create a email"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:border-green-400"
                  onChange={(e) => setemail(e.target.value)}

                />
              </div>
              <div className="relative">
                <label htmlFor="signup-confirm-password" className="block text-sm text-gray-400 mb-1">
                   Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:border-green-400"
                  onChange={(e) => setpassword(e.target.value)}

                />
                
              </div>
              <button
              onClick={handleSignUp}
                type="submit"
                className="w-full py-2 rounded-lg border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 transition"
              >
                Signup
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default Auth