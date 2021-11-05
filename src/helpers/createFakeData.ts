import dayjs from 'dayjs'
import { fake } from 'faker'
import fs from 'fs'
import path from 'path'

interface profileItem {
  network: string
  username: string
  url: string
}

const createProfiles = (): profileItem[] => {
  return [
    {
      network: 'github',
      username: fake('{{internet.userName}}'),
      url: fake('{{internet.url}}'),
    },
    {
      network: 'twitter',
      username: fake('{{internet.userName}}'),
      url: fake('{{internet.url}}'),
    },
    {
      network: 'linkedin',
      username: fake('{{internet.userName}}'),
      url: fake('{{internet.url}}'),
    },
  ]
}

interface basics {
  name: string
  label: string
  email: string
  phone: string
  website: string
  location: {
    address: string
    postalCode: string
    city: string
    countryCode: string
    region: string
  }
  profiles: profileItem[]
}

const createBasics = (): basics => {
  const location = {
    address: fake('{{address.streetAddress}}'),
    postalCode: fake('{{address.zipCode}}'),
    city: fake('{{address.city}}'),
    countryCode: fake('{{address.countryCode}}'),
    region: fake('{{address.state}}'),
  }

  const profiles = createProfiles()

  const phone = Math.floor(Math.random() * 9999999999).toString()

  return {
    name: fake('{{name.firstName}} {{name.lastName}}'),
    label: fake('{{name.jobTitle}}'),
    email: fake('{{internet.email}}'),
    phone: phone.length === 10 ? phone : '1234567890',
    website: fake('{{internet.url}}'),
    location,
    profiles,
  }
}

interface workItem {
  company: string
  position: string
  summary: string
  startDate: string
  endDate: string
  link: string
}

const createWork = (num: number): workItem[] => {
  const workList: workItem[] = []

  for (let i = 0; i < num + 1; i++) {
    const newWork = {
      company: fake('{{company.companyName}}'),
      position: fake('{{name.jobTitle}}'),
      summary: fake('- {{company.bs}}\n- {{company.bs}}\n- {{company.bs}}'),
      startDate: dayjs(fake('{{date.past}}')).format('YYYY-MM-DD'),
      endDate: dayjs(fake('{{date.future}}')).format('YYYY-MM-DD'),
      link: fake('{{internet.url}}'),
    }

    workList.push(newWork)
  }

  return workList
}

interface volunteerItem {
  organization: string
  position: string
  summary: string
  startDate: string
  endDate: string
}

const createVolunteer = (num: number): volunteerItem[] => {
  const volList: volunteerItem[] = []

  for (let i = 0; i < num + 1; i++) {
    const newVol = {
      organization: fake('{{company.companyName}}'),
      position: fake('Volunteer {{name.jobTitle}}'),
      summary: fake('- {{company.bs}}\n- {{company.bs}}\n- {{company.bs}}'),
      startDate: dayjs(fake('{{date.past}}')).format('YYYY-MM-DD'),
      endDate: dayjs(fake('{{date.future}}')).format('YYYY-MM-DD'),
    }

    volList.push(newVol)
  }

  return volList
}

interface educationItem {
  institution: string
  area: string
  studyType: string
  courses: string[]
  startDate: string
  endDate: string
}

const createEducation = (num: number): educationItem[] => {
  const eduList: educationItem[] = []

  for (let i = 0; i < num + 1; i++) {
    const courses = [
      fake(' {{random.alphaNumeric}}{{random.alphaNumeric}}').toUpperCase() +
        fake('{{datatype.number}}: {{name.jobType}} {{name.jobArea}}'),
      fake(' {{random.alphaNumeric}}{{random.alphaNumeric}}').toUpperCase() +
        fake('{{datatype.number}}: {{name.jobType}} {{name.jobArea}}'),
      fake(' {{random.alphaNumeric}}{{random.alphaNumeric}}').toUpperCase() +
        fake('{{datatype.number}}: {{name.jobType}} {{name.jobArea}}'),
    ]

    eduList.push({
      institution: fake(
        '{{name.firstName}} {{name.lastName}} University of {{address.cityPrefix}} {{address.city}}'
      ),
      area: fake('{{name.jobTitle}}'),
      studyType: 'Certificate',
      courses,
      startDate: dayjs(fake('{{date.past}}')).format('YYYY-MM-DD'),
      endDate: dayjs(fake('{{date.future}}')).format('YYYY-MM-DD'),
    })
  }

  return eduList
}

interface skillsItem {
  name: string
  keywords: string[]
}

const createSkills = (num: number): skillsItem[] => {
  const skillsList: skillsItem[] = []

  for (let i = 0; i < num + 1; i++) {
    skillsList.push({
      name: fake('{{name.jobArea}}'),
      keywords: [fake('{{random.word}}'), fake('{{hacker.noun}}')],
    })
  }

  return skillsList
}

export const createFakeData = (): string => {
  console.log('creating fake data')
  const basics = createBasics()
  const work = createWork(Math.floor(Math.random() * 2))
  const volunteer = createVolunteer(Math.floor(Math.random() * 2))
  const education = createEducation(Math.floor(Math.random() * 2))
  const skills = createSkills(Math.floor(Math.random() * 5))

  return JSON.stringify({ basics, work, volunteer, education, skills })
}

export const writeToDisk = (data: string, dest: string): void => {
  fs.writeFileSync(path.join(__dirname, dest), data)
}

writeToDisk(createFakeData(), '../data/data.json')

const createFakeCoverLetter = (): string => {
  console.log('creating fake cover letter')

  const contents: string = fake(
    '{{lorem.paragraph}}\n\n{{lorem.paragraph}}\n\n{{lorem.paragraph}}'
  )
  const recruiterFirstName: string = fake('{{name.firstName}}')
  const recruiterLastName: string = fake('{{name.lastName}}')
  const address: string = fake('{{address.streetAddress}}')
  const postalCode: string = fake('{{address.zipCode}}')
  const city: string = fake('{{address.city}}')
  const countryCode: string = fake('{{address.countryCode}}')
  const region: string = fake('{{address.state}}')

  return `---
address: ${address}
postalCode: ${postalCode}
recruiterFirstName: ${recruiterFirstName}
recruiterLastName: ${recruiterLastName}
city: ${city}
countryCode: ${countryCode}
region: ${region}
---

${contents}`
}

writeToDisk(createFakeCoverLetter(), '../data/letter.md')

export default createFakeData
