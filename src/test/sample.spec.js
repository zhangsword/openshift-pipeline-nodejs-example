describe('a test', () => {
    it("should not fail", () => {
        expect(true).toBe(true);
    })

    it("fails", () => {
        expect(true).toBe(false);
    })
})