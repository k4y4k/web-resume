const transformArrayToBulletPoints = (courses: string[]): string => {
  let res = "";

  for (let i = 0; i < courses.length; i++) {
    const el = courses[i];

    if (el === "") continue;

    res += `- ${el} \n`;
  }

  return res;
};

export default transformArrayToBulletPoints;
