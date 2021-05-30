const transformArrayToBulletPoints = (courses: string[]): string => {
  let res = ''

  courses.forEach(el => {
    // don't return empty points
    if (el === '') return

    return (res += `- ${el} \n`)
  })

  return res
}

export default transformArrayToBulletPoints
