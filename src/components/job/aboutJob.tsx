import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";


const AboutJob = () => {
  return (
    <div className="flex flex-col items-start w-full gap-6 bg-light border border-gray-300 px-6 rounded-lg py-6 flex-2">
      <div className="space-y-3">
        <p className="font-bold text-md tracking-wide">About the role</p>
        <p className="text-muted leading-relaxed">
          Shape intuitive digital experiences for millions of people. Work
          alongside product managers and engineers to take ideas from research
          to polished, accessible products. This sample role calls for
          experience in product design, prototyping, and cross-functional
          collaboration.
        </p>
      </div>

      <div className="space-y-3">
        <p className="font-bold text-md tracking-wide">Responsibilities</p>
        <ul className="flex flex-col items-start gap-2 text-muted list-disc px-4">
          <li>
            Develop and maintain server-side applications using Node.js and
            Express.js.
          </li>
          <li>
            Design, develop, and integrate RESTful APIs to support frontend
            applications.
          </li>
          <li>
            Implement user authentication and authorization using JWT and secure
            password hashing.
          </li>
          <li>
            Work with databases such as MongoDB and PostgreSQL to store,
            retrieve, and manage application data.
          </li>
          <li>
            Write clean, reusable, maintainable, and well-documented code.
          </li>
          <li>
            Identify, troubleshoot, and resolve backend bugs and application
            errors.
          </li>
          <li>
            Integrate third-party APIs and services into existing applications.
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <p className="font-bold text-md tracking-wide">Skills</p>
        <ul className="flex flex-col items-start gap-2 text-muted list-disc px-4">
          <li>
            Proficient in developing backend applications using Node.js and
            Express.js.
          </li>
          <li>
            Knowledge of JavaScript (ES6+) and TypeScript for server-side
            development.
          </li>
          <li>Experience designing and developing RESTful APIs.</li>
          <li>
            Understanding of relational and NoSQL databases, including
            PostgreSQL and MongoDB.
          </li>
          <li>
            Knowledge of authentication and authorization using JWT and bcrypt.
          </li>
          <li>
            Experience with database modeling, queries, and data management.
          </li>
          <li>Proficient in using Git and GitHub for version control.</li>
          <li>Experience testing and debugging APIs using Postman.</li>
          <li>
            Understanding of asynchronous programming, promises, and
            async/await.
          </li>
          <li>
            Knowledge of API security, input validation, and error handling.
          </li>
          <li>Ability to integrate third-party APIs and external services.</li>
          <li>Strong problem-solving, analytical, and debugging skills.</li>
        </ul>
      </div>

      <Link to={''} className="text-light text-sm rounded-lg p-3 bg-green-700 flex items-center gap-2 hover:bg-brand transition-colors">
        <span>Apply for this role</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default AboutJob;
