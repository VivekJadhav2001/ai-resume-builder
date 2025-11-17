import React, { useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";

function Home() {

  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate()

  const templates = [
    { id: 1, src: "https://writelatex.s3.amazonaws.com/published_ver/45943.jpeg?X-Amz-Expires=14400&X-Amz-Date=20251113T160127Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20251113/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=a2a90f36109d968d674821a8625ff960098f15af88f516c1bf2d127c4f43ed94", locked: false },
    { id: 2, src: "https://writelatex.s3.amazonaws.com/published_ver/45792.jpeg?X-Amz-Expires=14400&X-Amz-Date=20251113T161037Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20251113/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=139bab17cbe334ec7dc9d045d98091290418b17d2b37abf24c22715188d8ee9c", locked: true },
    // { id: 3, src: "https://writelatex.s3.amazonaws.com/published_ver/23504.jpeg?X-Amz-Expires=14400&X-Amz-Date=20251113T161058Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20251113/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=ff7d01639125ca42bcc47579509913529e8fccf9e29f4e896c901954b8674738", locked: false },
    // { id: 4, src: "https://writelatex.s3.amazonaws.com/published_ver/38460.jpeg?X-Amz-Expires=14400&X-Amz-Date=20251113T161110Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20251113/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=5af74041794b22823cfdcebd235f1ba25dadc7fab7e74a315620c5153f4fc43d", locked: true },
  ];


  function redirectToForms(){
    navigate("/userDetails")
  }


  return (
    <div className={`${darkMode ? "bg-[#0b0b1a] text-white" : "bg-linear-to-br from-[#f9fafb] to-[#eef1f5] text-gray-900"} pb-8 min-h-screen transition-all duration-500`}>
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 backdrop-blur-md bg-white/10 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold tracking-tight bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          ResumeCraft
        </h1>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium border px-4 py-1.5 rounded-xl hover:bg-indigo-500 hover:text-white transition">
            Login
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 text-white dark:bg-gray-800 hover:scale-110 transition"
          >
            {darkMode ? <IoSunnyOutline size={18} /> : <IoMoon size={18} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-16 px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Craft Your <span className="text-indigo-500">Perfect Resume</span> in Minutes
        </h2>
        <p className="max-w-xl text-gray-600 dark:text-gray-300 mb-10">
          Choose a stunning template, fill your details, and land your dream job effortlessly.
        </p>

        {/* Templates */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
          {templates.map((t) => (
            <div
              key={t.id}
              className={`relative rounded-2xl overflow-hidden shadow-md hover:scale-105 transition duration-300 cursor-pointer ${
                t.locked ? "opacity-60" : ""
              }`}
            >
              <img src={t.src} alt={`Template ${t.id}`} className="w-full h-auto" />
              {t.locked && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <FaLock size={30} className="text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button 
        className="bg-linear-to-r cursor-pointer from-indigo-500 to-purple-500 text-white font-semibold px-10 py-3 rounded-full text-lg hover:shadow-lg hover:scale-105 transition"
        onClick={redirectToForms}
        >
          Get Started
        </button>
      </section>
    </div>
  )
}

export default Home