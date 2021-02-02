const transformArrayToBulletPoints = (courses: string[]): string => {
  let res = ''

  courses.forEach(el => (res += `- ${el} \n`))

  return res
}

export default transformArrayToBulletPoints
