import React from 'react';

const Education = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Educational Background</h2>
        <div className="space-y-8">
          {/* University Education */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Bachelor of Science in Applied Computer Science</h3>
                <p className="text-lg text-indigo-600 font-semibold mt-1">Kisii University</p>
              </div>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">2025</span>
            </div>
            <p className="text-gray-600 mt-4">Relevant Coursework:</p>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "Data Structures and Algorithms",
                "Database Management",
                "Web Development",
                "Machine Learning",
                "Computer Networks",
                "Operating Systems",
                "Software Engineering",
                "Artificial Intelligence"
              ].map((course, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-gray-600">{course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Education */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Kenya Certificate of Secondary Education (KCSE)</h3>
                <p className="text-lg text-indigo-600 font-semibold mt-1">Nduluni Secondary School</p>
                <p className="text-gray-600 mt-1">Makueni, Mukaa Sub-County</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">2021</span>
                <span className="mt-2 bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">Grade: B+</span>
              </div>
            </div>
          </div>

          {/* Primary Education */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Kenya Certificate of Primary Education (KCPE)</h3>
                <p className="text-lg text-indigo-600 font-semibold mt-1">Wiivia Primary School</p>
                <p className="text-gray-600 mt-1">Makueni, Makindu Sub-County, Nguumo Location</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">2016</span>
                <span className="mt-2 bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">Marks: 372</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Certified Python Developer</h4>
                    <p className="text-sm text-gray-600">Coursera, 2022</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Web Development Bootcamp</h4>
                    <p className="text-sm text-gray-600">Udemy, 2021</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Machine Learning Specialization</h4>
                    <p className="text-sm text-gray-600">Coursera, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;