import React from "react";
import { Mail, Github, Linkedin, Globe } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section className="w-[70%] mx-auto py-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact</h2>

      <p className="text-center text-gray-600 mb-4 text-sm">
        Feel free to reach out for opportunities, collaboration, or any
        professional inquiry.
      </p>

      <div className="max-w-xl mx-auto space-y-5">
        {/* Email */}
        <a
          href="mailto:shivamofficialsm@gmail.com"
          className="flex items-center gap-4 p-4 border rounded-md hover:bg-gray-50 transition"
        >
          <Mail size={20} />
          <div>
            <p className="font-medium">Email</p>
            <p className="text-sm text-gray-600">shivamofficialsm@gmail.com</p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/shivamMittal088"
          target="_blank"
          className="flex items-center gap-4 p-4 border rounded-md hover:bg-gray-50 transition"
        >
          <Github size={20} />
          <div>
            <p className="font-medium">GitHub</p>
            <p className="text-sm text-gray-600">
              github.com/shivamMittal088
            </p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/shivamMittal088"
          target="_blank"
          className="flex items-center gap-4 p-4 border rounded-md hover:bg-gray-50 transition"
        >
          <Linkedin size={20} />
          <div>
            <p className="font-medium">LinkedIn</p>
            <p className="text-sm text-gray-600">
              linkedin.com/in/shivamMittal088
            </p>
          </div>
        </a>

        {/* Website */}
        <a
          href="https://www.theshivam.dev/"
          target="_blank"
          className="flex items-center gap-4 p-4 border rounded-md hover:bg-gray-50 transition"
        >
          <Globe size={20} />
          <div>
            <p className="font-medium">Website</p>
            <p className="text-sm text-gray-600">theshivam.dev</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
