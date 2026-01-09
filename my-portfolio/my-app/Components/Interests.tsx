import React from "react";

type InterestItem = {
  title: string;
  description: string;
};

const interests: InterestItem[] = [
  {
    title: "Building Products",
    description:
      "I enjoy creating useful web applications that solve real problems, whether it’s tracking expenses, managing tasks, or helping people collaborate better.",
  },
  {
    title: "Backend Engineering",
    description:
      "I like working on APIs, databases, and system design. Writing clean, scalable backend code is something I find deeply satisfying.",
  },
  {
    title: "Learning & Improving",
    description:
      "I continuously improve my skills by reading documentation, building side projects, and experimenting with new technologies.",
  },
  {
    title: "Problem Solving",
    description:
      "I enjoy breaking down complex problems into simple steps and finding efficient, practical solutions through code.",
  },
];

const Interests: React.FC = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">
          Interests
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {interests.map((interest) => (
            <div
              key={interest.title}
              className="bg-white p-6 rounded-lg border shadow-sm"
            >
              <h3 className="font-medium text-gray-900 mb-2">
                {interest.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
