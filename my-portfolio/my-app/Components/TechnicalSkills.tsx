import React from "react";

type SkillItem = {
  title: string;
  items: string;
};

const skills: SkillItem[] = [
  {
    title: "Programming Languages",
    items: "JavaScript, TypeScript, C++, Python, Object Oriented Programming",
  },
  {
    title: "Web Development",
    items: "React, Tailwind CSS, Node.js, Express, REST APIs, Redux",
  },
  {
    title: "Databases",
    items: "MongoDB, MySQL",
  },
  {
    title: "Tools & Platforms",
    items: "Git, GitHub, Postman, VS Code",
  },
  {
    title: "Concepts",
    items:
      "Data Structures & Algorithms, Authentication, API Design, MVC Architecture",
  },
];

const TechnicalSkills: React.FC = () => {
  return (
    <section className="w-full py-4 pb-8 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Technical Skills
        </h2>

        <ul className="space-y-4 text-[15px] text-gray-800 list-disc list-inside leading-relaxed">
          {skills.map((skill) => (
            <li key={skill.title}>
              <span className="font-semibold">{skill.title}</span>
              <span className="block ml-6 text-gray-600">
                {skill.items}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechnicalSkills;
