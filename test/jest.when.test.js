const { when } = require('jest-when')
 

test('nono', () => {
    const fn = jest.fn()
    when(fn).calledWith(1).mockReturnValue('yay!')
     
    expect(fn(1)).toEqual('yay!')
})

test('nono2', () => {
    const fn = jest.fn()
    when(fn)
    .calledWith(1).mockReturnValue('yay!')
    .calledWith(2).mockReturnValue('nay!')
   
  expect(fn(1)).toEqual('yay!')
  expect(fn(2)).toEqual('nay!')
})
