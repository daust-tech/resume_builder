"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useRef, useState } from "react";
import { ResumeForm } from "./components/ResumeForm";
import { ResumePreview } from "./components/ResumePreview";
import type { ResumeData } from "./types/resume";
import { downloadResume } from "./utils/downloadResume";

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    name: "Mouhamadou Maguette Sall",
    email: "maguettemaguettesall@gmail.com",
    phone: "+221785998132",
    summary:
      "Dynamic and results-oriented professional with a strong background in software development and project management. Proven ability to lead teams and deliver high-quality projects on time. Passionate about leveraging technology to solve complex problems and enhance user experiences.",
    experience:
      "Software Developer\nXYZ Tech Solutions, Dakar, Senegal\nJune 2021 - Present\n- Developed and maintained web applications using React and Node.js, improving user engagement by 30%.\n- Collaborated with cross-functional teams to define, design, and ship new features, ensuring alignment with business goals.\n- Implemented automated testing and CI/CD pipelines, reducing deployment time by 40%.\n\nIntern Software Engineer\nABC Innovations, Dakar, Senegal\nJanuary 2020 - May 2021\n- Assisted in the development of a mobile application that streamlined customer service operations, resulting in a 20% increase in customer satisfaction.\n- Participated in code reviews and contributed to the improvement of coding standards and best practices.",
    education:
      "Bachelor of Science in Computer Science\nUniversity of Dakar, Dakar, Senegal\nGraduated: May 2021\n- Relevant coursework: Data Structures, Algorithms, Web Development, Database Management.\n- Completed a capstone project on developing a responsive web application for local businesses.",
    skills:
      "Programming Languages: JavaScript, TypeScript, Python\nFrameworks: React, Node.js, Express\nTools: Git, Docker, Jenkins\nSoft Skills: Team Leadership, Problem Solving, Communication",
    gender: "male",
  });

  const resumeRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDownload = async () => {
    await downloadResume(resumeRef.current);
  };

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">DS-HACKERS Resume Builder</h1>
        <Button onClick={handleDownload} className="gap-2">
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ResumeForm resumeData={resumeData} onChange={handleChange} />
        <ResumePreview ref={resumeRef} resumeData={resumeData} />
      </div>
    </main>
  );
}
