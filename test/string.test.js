describe('string.js: ', function () {
  it('capitalize should work fine.', function () {
    expect('a apple is not APPLE MAC'.capitalize()).toBe('A apple is not apple mac')
  })

  it('center should work fine.', function () {
    expect('apple'.center(20, 'cbaef')).toBe('cbaefcbapplecbaefcba')
  })

  it('count should work fine.', function () {
    expect('apple is not an orange'.count('e', 1)).toBe(2)
    expect('apple is not an orange'.count('e', 11)).toBe(1)
    expect('apple is not an orange'.count('ang')).toBe(1)
  })

  it('endsWith should work fine.', function () {
    expect('bipartisanship'.endsWith('ship', 1)).toBeTruthy()
    expect('bipartisanship'.endsWith('ship', 1, 6)).toBeFalsy()
  })

  it('find should work fine.', function () {
    expect('bipartisanship'.find('ship', 1)).toEqual('bipartisanship'.find('ship') - 1)
    expect('bipartisanship'.find('ship', 1, 6)).toBe(-1)
  })

  it('index should work fine.', function () {
    // expect('mike morrison'.index('fff', 1)).toThrowError('No such element')
    expect('bipartisanship'.index('ship')).toBe(10)
  })

  it('isalnum should work fine.', function () {
    expect('mike morrison'.isalnum()).toBeFalsy()
    expect(''.isalnum()).toBeFalsy()
    expect('bipartisanship'.isalnum()).toBeTruthy()
  })

  it('isalpha should work fine.', function () {
    expect('12131'.isalpha()).toBeFalsy()
    expect(''.isalpha()).toBeFalsy()
    expect('bipartisanship'.isalpha()).toBeTruthy()
  })

  it('islower should work fine.', function () {
    expect('12131'.islower()).toBeFalsy()
    expect(''.islower()).toBeFalsy()
    expect('bipartisanship'.islower()).toBeTruthy()
  })

  it('isnumeric should work fine.', function () {
    expect('12131'.isnumeric()).toBeTruthy()
    expect(''.isnumeric()).toBeFalsy()
    expect('bipartisanship'.isnumeric()).toBeFalsy()
  })

  it('isspace should work fine.', function () {
    expect('121  31'.isspace()).toBeTruthy()
    expect('bipartisanship'.isspace()).toBeFalsy()
  })

  it('issuper should work fine.', function () {
    expect('AASSS'.issuper()).toBeTruthy()
    expect('bipartisanship'.issuper()).toBeFalsy()
  })

  it('join should work fine.', function () {
    expect('-'.join([1, 2, 3])).toBe('1-2-3')
  })

  it('ljust should work fine.', function () {
    expect('abc'.ljust(5, '*')).toBe('abc**')
  })

  it('lower should work fine.', function () {
    expect('abcDD'.lower(5, '*')).toBe('abcdd')
  })

  it('lstrip should work fine.', function () {
    expect('abc DD'.lstrip('abc')).toBe('DD')
    expect('  tommy'.lstrip('m')).toBe('tommy')
    expect(' mike micky'.lstrip('m')).toBe('ike micky')
    expect(' mike micky'.lstrip('mike')).toBe('micky')
  })

  it('maketrans should work fine.', function () {
    expect('this is string example....wow!!!'.maketrans('aeiou', '12345')).toBe('th3s 3s str3ng 2x1mpl2....w4w!!!')
  })

  //
  it('replace should work fine.', function () {
    const str = new String('hello Robino')

    // does not work for modified native function 
    //expect('hello Robino'.replace('o', 'k', 2)).toEqual('hellk kbino') 

    //has to change to toEqual from to be, otherwise does not work expecting a function
    expect(String.prototype.replace.call(str, 'o', 'k', 2)).toEqual('hellk Rkbino')
    expect(String.prototype.replace.call(str, 'o', 'k')).toEqual('hellk Rkbink')
  })

  it('rfind should work fine.', function () {
    expect('bob'.rfind('o')).toBe(1)
  })


  it('rjust should work fine.', function () {
    expect('abc'.rjust(5, '*')).toBe('**abc')
  })

  it('rstrip should work fine.', function () {
    expect('abc DD'.rstrip('DD')).toEqual('abc')
    expect('  tomm y'.rstrip('y')).toEqual('  tomm')
  })

  it('split should work fine.', function () {
    expect('abcaccadd'.split('a')).toEqual(['', 'bc', 'cc', 'dd'])
    expect('abcaccadd'.split('a', 2)).toEqual(['', 'bc', 'ccadd'])
  })


  it('upper should work fine.', function () {
    expect('aBd'.upper()).toEqual('ABD')
  })






})