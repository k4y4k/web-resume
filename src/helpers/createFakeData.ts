import fs from "node:fs";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import type {
  CoverLetterFrontmatter,
  DataBasics,
  DataEducationItem,
  DataOpenSourceItem,
  DataSkillsItem,
  DataVolunteerItem,
  DataWorkItem,
  ProfileItem,
  ResumeData,
} from "../types/ResumeData";

const createProfiles = (): ProfileItem[] => {
  return [
    {
      network: "github",
      username: faker.helpers.fake("{{internet.username}}"),
      url: faker.helpers.fake("{{internet.url}}"),
    },
    {
      network: "twitter",
      username: faker.helpers.fake("{{internet.username}}"),
      url: faker.helpers.fake("{{internet.url}}"),
    },
    {
      network: "linkedin",
      username: faker.helpers.fake("{{internet.username}}"),
      url: faker.helpers.fake("{{internet.url}}"),
    },
  ];
};

const createBasics = (): DataBasics => {
  const location = {
    location: faker.helpers.fake("{{location.streetAddress}}"),
    postalCode: faker.helpers.fake("{{location.zipCode}}"),
    city: faker.helpers.fake("{{location.city}}"),
    countryCode: faker.helpers.fake("{{location.countryCode}}"),
    region: faker.helpers.fake("{{location.state}}"),
  };

  const profiles = createProfiles();

  const phone = Math.floor(Math.random() * 9999999999).toString();

  return {
    name: faker.helpers.fake("{{person.firstName}} {{person.lastName}}"),
    label: faker.helpers.fake("{{person.jobTitle}}"),
    email: faker.helpers.fake("{{internet.email}}"),
    phone: phone.length === 10 ? phone : "1234567890",
    website: faker.helpers.fake("{{internet.url}}"),
    location,
    profiles,
  };
};

const createWork = (num: number): DataWorkItem[] => {
  const workList: DataWorkItem[] = [];

  for (let i = 0; i < num; i++) {
    /** Handle cases where there is no link to the company */
    const maybeAddLink = Math.random() >= 0.5;

    const newWork: DataWorkItem = {
      company: faker.helpers.fake("{{company.name}}"),
      position: faker.helpers.fake("{{person.jobTitle}}"),
      summary: faker.helpers.fake(
        "- {{company.buzzPhrase}}\n- {{company.buzzPhrase}}\n- {{company.buzzPhrase}}",
      ),
      startDate: dayjs(faker.helpers.fake("{{date.past}}")).format(
        "YYYY-MM-DD",
      ),
      endDate: dayjs(faker.helpers.fake("{{date.future}}")).format(
        "YYYY-MM-DD",
      ),
    };

    if (maybeAddLink) {
      newWork.link = faker.helpers.fake("{{internet.url}}");
    }

    workList.push(newWork);
  }

  return workList;
};

const createVolunteer = (num: number): DataVolunteerItem[] => {
  const volList: DataVolunteerItem[] = [];

  for (let i = 0; i < num + 1; i++) {
    const newVol = {
      organization: faker.helpers.fake("{{company.name}}"),
      position: faker.helpers.fake("Volunteer {{person.jobTitle}}"),
      summary: faker.helpers.fake(
        "- {{company.buzzPhrase}}\n- {{company.buzzPhrase}}\n- {{company.buzzPhrase}}",
      ),
      startDate: dayjs(faker.helpers.fake("{{date.past}}")).format(
        "YYYY-MM-DD",
      ),
      endDate: dayjs(faker.helpers.fake("{{date.future}}")).format(
        "YYYY-MM-DD",
      ),
    };

    volList.push(newVol);
  }

  return volList;
};

const createEducation = (num: number): DataEducationItem[] => {
  const eduList: DataEducationItem[] = [];

  for (let i = 0; i < num + 1; i++) {
    const courses = [
      faker.helpers
        .fake(" {{string.alphanumeric}}{{string.alphanumeric}}")
        .toUpperCase() +
        faker.helpers.fake(
          "{{number.int}}: {{person.jobType}} {{person.jobArea}}",
        ),
      faker.helpers
        .fake(" {{string.alphanumeric}}{{string.alphanumeric}}")
        .toUpperCase() +
        faker.helpers.fake(
          "{{number.int}}: {{person.jobType}} {{person.jobArea}}",
        ),
      faker.helpers
        .fake(" {{string.alphanumeric}}{{string.alphanumeric}}")
        .toUpperCase() +
        faker.helpers.fake(
          "{{number.int}}: {{person.jobType}} {{person.jobArea}}",
        ),
    ];

    eduList.push({
      institution: faker.helpers.fake(
        "{{person.firstName}} {{person.lastName}} University of {{location.city}}",
      ),
      area: faker.helpers.fake("{{person.jobTitle}}"),
      studyType: "Certificate",
      courses,
      startDate: dayjs(faker.helpers.fake("{{date.past}}")).format(
        "YYYY-MM-DD",
      ),
      endDate: dayjs(faker.helpers.fake("{{date.future}}")).format(
        "YYYY-MM-DD",
      ),
    });
  }

  return eduList;
};

const createSkills = (num: number): DataSkillsItem[] => {
  const skillsList: DataSkillsItem[] = [];

  for (let i = 0; i < num + 1; i++) {
    skillsList.push({
      name: faker.helpers.fake("{{person.jobArea}}"),
      keywords: [
        faker.helpers.fake("{{word.words}}"),
        faker.helpers.fake("{{hacker.noun}}"),
      ],
    });
  }

  return skillsList;
};

const createOpenSource = (num: number): DataOpenSourceItem[] => {
  const res: DataOpenSourceItem[] = [];

  for (let i = 0; i < num; i++) {
    res.push({
      forge: "github",
      userRepo: `${faker.internet.username()}/${faker.word.noun()}-${faker.word.verb()}`,
      description: faker.word.words(),
      relevant: Math.random() >= 0.5,
      rawDates: `${dayjs(faker.date.past()).format("MMM YY")} - ${dayjs(
        faker.date.soon(),
      ).format("MMM YY")}`,
    });
    num;
  }

  return res;
};

export const createFakeData = (): string => {
  console.log("creating fake data");

  const basics = createBasics();
  const work = createWork(3);
  const volunteer = createVolunteer(Math.floor(Math.random() * 2));
  const openSource = createOpenSource(Math.floor(Math.random() * 2));
  const education = createEducation(Math.floor(Math.random() * 2));
  const skills = createSkills(Math.floor(Math.random() * 5));

  return JSON.stringify({
    basics,
    work,
    volunteer,
    openSource,
    education,
    skills,
  } as ResumeData);
};

export const writeResume = () => {
  return fs.writeFileSync("src/data/data.json", createFakeData());
};

export const createFakeCoverLetter = (): string => {
  console.log("creating fake cover letter...");

  const contents = faker.helpers.fake(
    "{{lorem.paragraph}}\n\n{{lorem.paragraph}}\n\n{{lorem.paragraph}}",
  );

  const recruiter: CoverLetterFrontmatter["recruiter"] = faker.helpers.fake(
    "{{person.fullName}}",
  );
  const location: CoverLetterFrontmatter["location"] = faker.helpers.fake(
    "{{location.streetAddress}}",
  );
  const postalCode: CoverLetterFrontmatter["postalCode"] = faker.helpers.fake(
    "{{location.zipCode}}",
  );
  const city: CoverLetterFrontmatter["city"] =
    faker.helpers.fake("{{location.city}}");
  const countryCode: CoverLetterFrontmatter["countryCode"] = faker.helpers.fake(
    "{{location.countryCode}}",
  );
  const region: CoverLetterFrontmatter["region"] =
    faker.helpers.fake("{{location.state}}");
  const company: CoverLetterFrontmatter["company"] =
    faker.helpers.fake("{{company.name}}");

  return `---
location: ${location}
company: ${company}
recruiter: ${recruiter}
postalCode: ${postalCode}
city: ${city}
countryCode: ${countryCode}
region: ${region}
---

${contents}`;
};

export const writeCoverLetter = () => {
  return fs.writeFileSync("src/data/letter.md", createFakeCoverLetter());
};
