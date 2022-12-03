document.addEventListener("DOMContentLoaded", function() {
    describe('Test calcPoints function, no aces', () => {
        it('Returns total points and whether hand isSoft', () => {
            let inputData = [
                {suit: 'hearts', val: 10, displayVal: 'Queen'}, 
                {suit: 'hearts', val: 2, displayVal: '2'}
            ]
            let result = calcPoints(inputData)
            expect(result).toEqual({total: 12, isSoft: false})
        })
    })
    describe('Test calcPoints function, 1 ace (soft)', () => {
        it('Returns total points and whether hand isSoft', () => {
            let inputData = [
                {suit: 'hearts', val: 11, displayVal: 'Ace'}, 
                {suit: 'hearts', val: 2, displayVal: '2'}
            ]
            let result = calcPoints(inputData)
            expect(result).toEqual({total: 13, isSoft: true})
        })
    })
    describe('Test calcPoints function, 1 ace (not soft)', () => {
        it('Returns total points and whether hand isSoft', () => {
            let inputData = [
                {suit: 'hearts', val: 10, displayVal: 'King'},
                {suit: 'hearts', val: 11, displayVal: 'Ace'},
                {suit: 'hearts', val: 10, displayVal: 'Queen'}
            ]
            let result = calcPoints(inputData)
            expect(result).toEqual({total: 21, isSoft: false})
        })
    })
    describe('Test calcPoints function, multipe ace (soft)', () => {
        it('Returns total points and whether hand isSoft', () => {
            let inputData = [
                {suit: 'hearts', val: 2, displayVal: '2'},
                {suit: 'hearts', val: 11, displayVal: 'Ace'},
                {suit: 'spades', val: 11, displayVal: 'Ace'}
            ]
            let result = calcPoints(inputData)
            expect(result).toEqual({total: 14, isSoft: true})
        })
    })
    describe('Test calcPoints function, multipe ace (not soft)', () => {
        it('Returns total points and whether hand isSoft', () => {
            let inputData = [
                {suit: 'hearts', val: 8, displayVal: '8'},
                {suit: 'hearts', val: 10, displayVal: '10'},
                {suit: 'hearts', val: 11, displayVal: 'Ace'},
                {suit: 'spades', val: 11, displayVal: 'Ace'}
            ]
            let result = calcPoints(inputData)
            expect(result).toEqual({total: 20, isSoft: false})
        })
    })
})