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
  })