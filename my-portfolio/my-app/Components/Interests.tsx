const Interests = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">
          Interests
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          {/* Card */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="font-medium text-gray-900 mb-2">
              Building Products
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              I enjoy creating useful web applications that solve real problems,
              whether it’s tracking expenses, managing tasks, or helping people
              collaborate better.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="font-medium text-gray-900 mb-2">
              Backend Engineering
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              I like working on APIs, databases, and system design. Writing clean,
              scalable backend code is something I find deeply satisfying.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="font-medium text-gray-900 mb-2">
              Learning & Improving
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              I continuously improve my skills by reading documentation, building
              side projects, and experimenting with new technologies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="font-medium text-gray-900 mb-2">
              Problem Solving
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              I enjoy breaking down complex problems into simple steps and finding
              efficient, practical solutions through code.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Interests
