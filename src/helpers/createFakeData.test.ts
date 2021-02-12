import createFakeData from './createFakeData'

describe('create fake data', () => {
  test('generates correct shape', () => {
    const fakedata = createFakeData()

    expect(fakedata).toHaveProperty('basics')
    expect(fakedata).toHaveProperty('work')
    expect(fakedata).toHaveProperty('volunteer')
    expect(fakedata).toHaveProperty('education')
    expect(fakedata).toHaveProperty('skills')
  })
})
