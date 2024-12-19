"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase, Code, GraduationCap, Mail, Phone } from "lucide-react";
import { forwardRef } from "react";
import { ResumeData } from "../types/resume";

interface ResumePreviewProps {
  resumeData: ResumeData;
}

export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ resumeData }, ref) => {
    console.log("Rendering ResumePreview with data:", resumeData);

    const genderColors = {
      male: "from-blue-500 to-blue-700",
      female: "from-pink-500 to-pink-700",
      other: "from-purple-500 to-purple-700",
    };

    const backgroundColor =
      genderColors[resumeData.gender as keyof typeof genderColors] ||
      "from-gray-500 to-gray-700";

    return (
      <Card
        className={`p-8 bg-gradient-to-br ${backgroundColor} text-white shadow-xl`}
        ref={ref}
      >
        <div className="space-y-6">
          <div className="border-b border-white/20 pb-6">
            <h2 className="text-4xl font-bold tracking-tight">
              {resumeData.name}
            </h2>
            <div className="flex flex-wrap gap-4 mt-3 text-white/80">
              {resumeData.email && (
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>{resumeData.email}</span>
                </div>
              )}
              {resumeData.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>{resumeData.phone}</span>
                </div>
              )}
            </div>
          </div>

          {resumeData.summary && (
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Professional Summary
              </h3>
              <p className="text-white/90 leading-relaxed">
                {resumeData.summary}
              </p>
            </div>
          )}

          {resumeData.experience && (
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Experience
              </h3>
              <div className="space-y-4">
                {resumeData.experience.split("\n\n").map((exp, index) => (
                  <div key={index} className="bg-white/10 p-4 rounded-lg">
                    <p className="whitespace-pre-line text-white/90 leading-relaxed">
                      {exp}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {resumeData.education && (
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </h3>
              <div className="space-y-4">
                {resumeData.education.split("\n").map((edu, index) => (
                  <div key={index} className="bg-white/10 p-4 rounded-lg">
                    <p className="text-white/90 leading-relaxed">{edu}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {resumeData.skills && (
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Code className="h-5 w-5" />
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.split(",").map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-white/20 text-white hover:bg-white/30 transition-colors"
                  >
                    {skill.trim()}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>
    );
  }
);

ResumePreview.displayName = "ResumePreview";
