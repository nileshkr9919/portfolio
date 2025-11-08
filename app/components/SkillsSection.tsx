// [`SkillsSection.tsx`](portfolio/app/components/SkillsSection.tsx)
import React from "react";

const skills = {
  Backend: [
    "Node.js (NestJS, LoopBack 4, Express)",
    "Microservices Architecture",
    "Event-Driven Systems",
    "Distributed Transactions & Fault Tolerance",
  ],
  Frontend: [
    "Angular",
    "React",
    "Next.js",
  ],
  "Infra/DevOps": [
    "Docker",
    "Kubernetes",
    "AWS (S3, Lambda, ECS, SQS, SNS)",
    "Helm",
    "CI/CD Pipelines (GitHub Actions, Jenkins)",
  ],
  Databases: [
    "PostgreSQL",
    "MongoDB",
    "DynamoDB",
    "Redis",
  ],
  "Architecture & Patterns": [
    "Domain-Driven Design (DDD)",
    "Event Sourcing",
    "SAGA Pattern",
    "Caching & Performance Optimization",
    "System Design & Scalability",
  ],
  "AI & Automation": [
    "LangChain",
    "Crew AI",
    "Camunda BPMN",
    "bpmn.js",
  ],
  "Testing & Tools": [
    "Jest",
    "Mocha",
    "Swagger / OpenAPI",
    "Git",
    "Postman",
  ],
};


export default function SkillsSection() {
  return (
    <section className="w-full min-h-screen py-20 px-6 text-slate-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-300 drop-shadow">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-transparent rounded-lg shadow p-6 flex flex-col border border-slate-700"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-200">
              {category}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm font-medium border border-blue-700"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}