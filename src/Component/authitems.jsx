// Sign in
 <div id="signin" className="w-full max-w-md flex flex-col items-center">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#202621]">সাইন ইন</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
        </div>

        <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100/80 p-6 sm:p-8">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">ইমেইল</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:outline-none focus:border-green-600 focus:bg-white text-sm text-gray-800 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">পাসওয়ার্ড</label>
              <input
                type="password"
                placeholder="কমপক্ষে ৮ অক্ষর"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:outline-none focus:border-green-600 focus:bg-white text-sm text-gray-800 placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              className="bg-[#058c42] hover:bg-[#047738] text-white font-medium py-2.5 rounded-lg w-full text-sm transition-colors mt-2"
            >
              সাইন ইন
            </button>
          </form>

          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <span className="relative px-3 bg-white text-xs text-gray-400">অথবা</span>
          </div>

          <div className="space-y-2.5">
            <button className="w-full flex items-center justify-center py-2 px-4 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg text-xs font-medium text-gray-700 transition-colors">
              <GoogleIcon />
              Google দিয়ে চালিয়ে যান
            </button>
            <button className="w-full flex items-center justify-center py-2 px-4 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg text-xs font-medium text-gray-700 transition-colors">
              <GithubIcon />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <div className="text-center mt-6 text-xs text-gray-600">
            অ্যাকাউন্ট নেই?{' '}
            <a href="#" className="text-[#058c42] font-semibold hover:underline">
              সাইন আপ করুন
            </a>
          </div>
        </div>

        <div className="mt-4 text-center">
          <a href="#" className="text-xs text-gray-500 hover:text-gray-700 hover:underline">
            ← হোম পেজে ফিরে যান
          </a>
        </div>
      </div>


// sign up 

<div className="w-full max-w-md flex flex-col items-center">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#202621]">অ্যাকাউন্ট তৈরি করুন</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
        </div>

        <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100/80 p-6 sm:p-8">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">নাম</label>
              <input
                type="text"
                placeholder="যেমন: রহিম উদ্দিন"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:outline-none focus:border-green-600 focus:bg-white text-sm text-gray-800 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">ইমেইল</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:outline-none focus:border-green-600 focus:bg-white text-sm text-gray-800 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">পাসওয়ার্ড</label>
              <input
                type="password"
                placeholder="কমপক্ষে ৮ অক্ষর"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:outline-none focus:border-green-600 focus:bg-white text-sm text-gray-800 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">পাসওয়ার্ড নিশ্চিত করুন</label>
              <input
                type="password"
                placeholder="আবার লিখুন"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:outline-none focus:border-green-600 focus:bg-white text-sm text-gray-800 placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              className="bg-[#058c42] hover:bg-[#047738] text-white font-medium py-2.5 rounded-lg w-full text-sm transition-colors mt-2"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </form>

          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <span className="relative px-3 bg-white text-xs text-gray-400">অথবা</span>
          </div>

          <div className="space-y-2.5">
            <button className="w-full flex items-center justify-center py-2 px-4 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg text-xs font-medium text-gray-700 transition-colors">
              <GoogleIcon />
              Google দিয়ে চালিয়ে যান
            </button>
            <button className="w-full flex items-center justify-center py-2 px-4 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg text-xs font-medium text-gray-700 transition-colors">
              <GithubIcon />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <div className="text-center mt-6 text-xs text-gray-600">
            অ্যাকাউন্ট আছে?{' '}
            <a href="#signin" className="text-[#058c42] font-semibold hover:underline">
              সাইন ইন করুন
            </a>
          </div>
        </div>

        <div className="mt-4 text-center">
          <a href="#" className="text-xs text-gray-500 hover:text-gray-700 hover:underline">
            ← হোম পেজে ফিরে যান
          </a>
        </div>
      </div>


// profile

<div className="w-full max-w-xl flex flex-col items-start">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#202621]">আমার প্রোফাইল</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
        </div>

        <div className="w-full space-y-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100/80 p-5 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                alt="Rezwan Ahmed"
                className="w-14 h-14 rounded-xl object-cover"
              />
              <div>
                <h2 className="text-base font-bold text-[#202621]">Rezwan Ahmed</h2>
                <p className="text-xs text-gray-500">rezwanahmed@gmail.com</p>
              </div>
            </div>

            <button className="border border-red-200 text-red-500 hover:bg-red-50 text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 font-medium transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>সাইন আউট</span>
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100/80 p-6 sm:p-8">
            <h3 className="text-sm font-bold text-[#202621] mb-4">তথ্য</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">নাম</label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:outline-none focus:border-green-600 focus:bg-white text-sm text-gray-800"
                />
              </div>

              <button
                type="submit"
                className="bg-[#058c42] hover:bg-[#047738] text-white font-medium py-2.5 rounded-lg w-full text-sm transition-colors mt-2"
              >
                আপডেট
              </button>
            </form>
          </div>
        </div>
      </div>