export default function TechnicalSkills() {
  return (
    <section className="w-full py-4 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Technical Skills
        </h2>

        <ul className="space-y-4 text-[15px] text-gray-800 list-disc list-inside leading-relaxed">
          <li>
            <span className="font-semibold">Programming Languages</span>
            <span className="block ml-6 text-gray-600">
              JavaScript, TypeScript, C++, Python, Object Oriented Programming
            </span>
          </li>

          <li>
            <span className="font-semibold">Web Development</span>
            <span className="block ml-6 text-gray-600">
              React, Tailwind CSS, Node.js, Express, REST APIs, Redux
            </span>
          </li>

          <li>
            <span className="font-semibold">Databases</span>
            <span className="block ml-6 text-gray-600">
              MongoDB, MySQL
            </span>
          </li>

          <li>
            <span className="font-semibold">Tools & Platforms</span>
            <span className="block ml-6 text-gray-600">
              Git, GitHub, Postman, VS Code
            </span>
          </li>

          <li>
            <span className="font-semibold">Concepts</span>
            <span className="block ml-6 text-gray-600">
              Data Structures & Algorithms, Authentication, API Design, MVC Architecture
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
