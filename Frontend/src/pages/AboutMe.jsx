// import React from 'react';

// export default function AboutMe() {
//   return (
//     <section className="-mt-25 w-full px-4 py-8 bg-gray-950 mx-6">
//       {/* Heading */}
//       <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6 transition duration-300 border-b border-gray-700 pb-3">
//         About Me
//       </h2>

//       {/* Intro */}
//       <p className="text-lg text-gray-300 leading-relaxed mb-4">
//         I am{" "}
//         <span className="font-semibold text-white">Kaveri Bhimappa Jarali</span>, 
//         a passionate{" "}
//         <span className="text-sky-300">Computer Science and Engineering</span> student 
//         with a CGPA of 
//         <span className="text-sky-300 font-medium"> 9.96 / 10</span>. <br/>
//         I enjoy building creative web applications, exploring new technologies, 
//         and solving challenging problems.
//       </p>

//       {/* Education */}
//       <div className="mb-6">
//         <h3 className="text-xl font-bold text-white mb-2">Education</h3>
//         <ul className="list-disc pl-6 space-y-6 text-gray-300 mt-6">
//           <li>
//             <span className="font-semibold text-white">B.E. in Computer Science and Engineering</span>,<br/>  
//             SDM College of Engineering and Technology,<br/>Dharwad —  
//             CGPA: <span className="text-sky-300 font-medium">9.96</span> (2023 – Present)
//           </li>
//           <li>
//             <span className="font-semibold text-white">
//             Pre-University Education</span>,<br/>SDVS PU College, <br/>Sankeshwar —
//             <span className="text-sky-300 font-medium">95.36%</span> (2021 – 2023)
//           </li>
//           <li>
//             <span className="font-semibold text-white">
//              Secondary Education (SSLC)</span>,<br/> Government High School, <br/>Bastawad —  
//             <span className="text-sky-300 font-medium">99.36%</span> (2019 – 2021)
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// }
import React, { useState } from 'react';

export default function AboutMe() {
  return (
    <section id="about" className="w-full px-4 py-0.5 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6 transition duration-300 border-b border-gray-700 pb-3">
          About Me
        </h2>

        {/* Professional Intro Card */}
        <div className="mb-8">
          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            I am <span className="font-semibold text-white">Kaveri Bhimappa Jarali</span>,
            a <span className="text-blue-400">Computer Science and Engineering</span> student
            with a CGPA of <span className="text-blue-400 font-medium">9.96 / 10</span>.<br/>
            I enjoy learning new technologies and applying my skills through practical projects.
          </p>
        </div>

        <div className="px-6 pb-6 border-gray-700">
          <div className="space-y-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
              <h4 className="font-semibold text-white mb-2">Bachelor of Engineering - Computer Science</h4>
              <p className="text-gray-300 mb-2">SDM College of Engineering and Technology, Dharwad</p>
              <p className="text-gray-400 text-sm">2023 – Present</p>
              <div className="mt-2">
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-sm font-medium">CGPA: 9.96/10</span>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
              <h4 className="font-semibold text-white mb-2">Pre-University Education</h4>
              <p className="text-gray-300 mb-2">SDVS PU College, Sankeshwar</p>
              <p className="text-gray-400 text-sm">2021 – 2023</p>
              <div className="mt-2">
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm font-medium">95.36%</span>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
              <h4 className="font-semibold text-white mb-2">Secondary Education (SSLC)</h4>
              <p className="text-gray-300 mb-2">Government High School, Bastawad</p>
              <p className="text-gray-400 text-sm">2019 – 2021</p>
              <div className="mt-2">
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm font-medium">99.36%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
