interface ProfileItem {
  network: string;
  username: string;
  url: string;
}

interface DataBasics {
  name: string;
  label: string;
  email: string;
  phone: string;
  website: string;
  location: {
    location: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
  };
  profiles: ProfileItem[];
}

interface DataWorkItem {
  company: string;
  position: string;
  summary: string;
  startDate: string;
  endDate: string;
  link?: string;
}

interface DataVolunteerItem {
  organization: string;
  position: string;
  summary: string;
  startDate: string;
  endDate: string;
}

interface DataEducationItem {
  institution: string;
  area: string;
  studyType: string;
  courses: string[];
  startDate: string;
  endDate: string;
}

interface DataSkillsItem {
  name: string;
  keywords: string[];
}

interface DataOpenSourceItem {
  forge: string;
  userRepo: string;
  description: string;
  rawDates?: string;
  relevant: boolean;
}

interface ResumeData {
  basics: DataBasics;
  work: DataWorkItem[];
  volunteer: DataVolunteerItem[];
  openSource: DataOpenSourceItem[];
  education: DataEducationItem[];
  skills: DataSkillsItem[];
}

interface CoverLetterFrontmatter {
  recruiter: string;
  location: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
  company: string;
}

export type {
  ProfileItem,
  DataBasics,
  DataWorkItem,
  DataVolunteerItem,
  DataEducationItem,
  DataSkillsItem,
  DataOpenSourceItem,
  ResumeData,
  CoverLetterFrontmatter,
};
