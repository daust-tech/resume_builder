"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Briefcase,
  Code,
  FileText,
  GraduationCap,
  Mail,
  Phone,
  User,
} from "lucide-react";
import React from "react";
import { ResumeData } from "../types/resume";

interface ResumeFormProps {
  resumeData: ResumeData;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

export function ResumeForm({ resumeData, onChange }: ResumeFormProps) {
  return (
    <Card className="p-6 space-y-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 col-span-full">
          <h2 className="text-2xl font-bold text-primary">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputWithIcon
              id="name"
              name="name"
              label="Full Name"
              icon={<User className="h-4 w-4" />}
              placeholder="Your name"
              value={resumeData.name}
              onChange={onChange}
            />
            <InputWithIcon
              id="email"
              name="email"
              label="Email"
              icon={<Mail className="h-4 w-4" />}
              placeholder="name@example.com"
              type="email"
              value={resumeData.email}
              onChange={onChange}
            />
            <InputWithIcon
              id="phone"
              name="phone"
              label="Phone"
              icon={<Phone className="h-4 w-4" />}
              placeholder="+1 234 567 890"
              value={resumeData.phone}
              onChange={onChange}
            />
            <div>
              <Label htmlFor="gender">Gender</Label>
              <div className="relative">
                <User className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <select
                  id="gender"
                  name="gender"
                  value={resumeData.gender}
                  onChange={onChange}
                  className="w-full pl-8 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <TextareaWithIcon
          id="summary"
          name="summary"
          label="Professional Summary"
          icon={<FileText className="h-4 w-4" />}
          placeholder="Brief overview of your professional background"
          value={resumeData.summary}
          onChange={onChange}
        />

        <TextareaWithIcon
          id="experience"
          name="experience"
          label="Work Experience"
          icon={<Briefcase className="h-4 w-4" />}
          placeholder="List your work experience"
          value={resumeData.experience}
          onChange={onChange}
        />

        <TextareaWithIcon
          id="education"
          name="education"
          label="Education"
          icon={<GraduationCap className="h-4 w-4" />}
          placeholder="List your educational background"
          value={resumeData.education}
          onChange={onChange}
        />

        <TextareaWithIcon
          id="skills"
          name="skills"
          label="Skills"
          icon={<Code className="h-4 w-4" />}
          placeholder="List your key skills"
          value={resumeData.skills}
          onChange={onChange}
        />
      </div>
    </Card>
  );
}

interface InputWithIconProps {
  id: string;
  name: string;
  label: string;
  icon: React.ReactNode;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputWithIcon({
  id,
  name,
  label,
  icon,
  placeholder,
  type = "text",
  value,
  onChange,
}: InputWithIconProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <div className="absolute left-2 top-2.5 text-muted-foreground">
          {icon}
        </div>
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className="pl-8 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-primary focus:border-transparent"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

interface TextareaWithIconProps {
  id: string;
  name: string;
  label: string;
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextareaWithIcon({
  id,
  name,
  label,
  icon,
  placeholder,
  value,
  onChange,
}: TextareaWithIconProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <div className="absolute left-2 top-2.5 text-muted-foreground">
          {icon}
        </div>
        <Textarea
          id={id}
          name={name}
          placeholder={placeholder}
          className="pl-8 h-32 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-primary focus:border-transparent"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
