import fs from "node:fs";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

interface profileItem {
  network: string;
  username: string;
  url: string;
}

const createProfiles = (): profileItem[] => {
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

interface basics {
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
  profiles: profileItem[];
}

const createBasics = (): basics => {
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

interface workItem {
  company: string;
  position: string;
  summary: string;
  startDate: string;
  endDate: string;
  link: string;
}

const createWork = (num: number): workItem[] => {
  const workList: workItem[] = [];

  for (let i = 0; i < num + 1; i++) {
    const newWork = {
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
      link: faker.helpers.fake("{{internet.url}}"),
    };

    workList.push(newWork);
  }

  return workList;
};

interface volunteerItem {
  organization: string;
  position: string;
  summary: string;
  startDate: string;
  endDate: string;
}

const createVolunteer = (num: number): volunteerItem[] => {
  const volList: volunteerItem[] = [];

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

interface educationItem {
  institution: string;
  area: string;
  studyType: string;
  courses: string[];
  startDate: string;
  endDate: string;
}

const createEducation = (num: number): educationItem[] => {
  const eduList: educationItem[] = [];

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

interface skillsItem {
  name: string;
  keywords: string[];
}

const createSkills = (num: number): skillsItem[] => {
  const skillsList: skillsItem[] = [];

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

export const createFakeData = (): string => {
  console.log("creating faker data");
  const basics = createBasics();
  const work = createWork(Math.floor(Math.random() * 4));
  const volunteer = createVolunteer(Math.floor(Math.random() * 2));
  const education = createEducation(Math.floor(Math.random() * 2));
  const skills = createSkills(Math.floor(Math.random() * 5));

  return JSON.stringify({ basics, work, volunteer, education, skills });
};

fs.writeFileSync("src/data/data.json", createFakeData());

const createFakeCoverLetter = (): string => {
  console.log("creating faker cover letter");

  const contents: string = faker.helpers.fake(
    "{{lorem.paragraph}}\n\n{{lorem.paragraph}}\n\n{{lorem.paragraph}}",
  );
  const recruiterFirstName: string = faker.helpers.fake("{{person.firstName}}");
  const recruiterLastName: string = faker.helpers.fake("{{person.lastName}}");
  const location: string = faker.helpers.fake("{{location.streetAddress}}");

  return `---
location: ${location}
recruiterFirstName: ${recruiterFirstName}
recruiterLastName: ${recruiterLastName}
---

${contents}`;
};

fs.writeFileSync("src/data/letter.md", createFakeCoverLetter());

export default createFakeData;
