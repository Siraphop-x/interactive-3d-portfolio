import { User, Computer } from "lucide-react";

export const features = [
  {
    icon: <User />,
    text: "Who I Am",
    description: (
      <div className="sm:text-md text-neutral-400 leading-relaxed hover:text-white cursor-pointer">
        <p className="mb-3">
          Hi, I'm Siraphop Prawdaeng (Phop). I'm a **Full-Stack Developer**
          passionate about turning complex requirements into high-performance,
          user-friendly web applications.
        </p>
        <p className="mb-3">
          I specialize in **React, TypeScript, and Node.js**, with a proven
          track record of delivering enterprise-level solutions for government
          sectors. I enjoy solving architectural challenges and building systems
          that provide real value to users.
        </p>
        <p>
          I'm a fast learner who thrives in agile environments, always
          leveraging modern tools to optimize development efficiency and
          maintain code quality.
        </p>
      </div>
    ),
  },
  {
    icon: <Computer />,
    text: "What I Do",
    description: (
      <div className="sm:text-md text-neutral-400 leading-relaxed hover:text-white cursor-pointer">
        <p>
          As a Full-Stack Developer with hands-on experience in **Enterprise &
          Government projects**, I build modern, scalable web ecosystems using:
        </p>
        <ul className="list-disc pl-5 mt-3">
          <li>
            Building robust **Full-Stack applications** with clean, maintainable
            code architectures.
          </li>
          <li>
            Optimizing database performance and handling complex SQL/NoSQL
            queries.
          </li>
          <li>
            Accelerating development cycles using **AI-assisted tools** for 40%
            faster delivery.
          </li>
          <li>
            Implementing secure and scalable **RESTful APIs** using Node.js and
            Express.
          </li>
        </ul>
        <p className="mt-3">
          I am committed to continuous learning and staying ahead of the tech
          curve to provide the best solutions for my team and clients.
        </p>
      </div>
    ),
  },
];
