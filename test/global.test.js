describe('global.js: ', function () {
    it('min should work fine.', function () {
        expect(min([1, 2])).toBe(1)
        expect(min('afzyg')).toBe('a')
    })

    it('max should work fine.', function () {
        expect(max([1, 2])).toBe(2)
        expect(max('afzyg')).toBe('z')
    })

    it('len should work fine.', function () {
        expect(len([1, 2])).toBe(2)
        expect(len('reason')).toBe(6)
    })
})