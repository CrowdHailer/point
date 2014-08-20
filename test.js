var Point;

beforeEach(function () {
    Point = require('./index.js');
});

describe('Point', function () {
    describe('initialisation', function () {
        it('from two coordinates', function () {
            var pt = Point.create(2, 3);
            expect(pt.x).toEqual(2);
            expect(pt.y).toEqual(3);
        });

        it('should be a point object', function () {
            var pt = Point.create(2, 3);
            expect(Point.isPoint(pt)).toBe(true);
        });

        it('should not validate plain objects', function () {
            expect(Point.isPoint({x: 2, y: 3})).toBe(false);
        });
    });

    describe('geometric operations', function () {
        var p1, p2, p3;
        beforeEach(function () {
            p1 = Point.create(2, 3);
            p2 = Point.create(4, 5);
        });

        it('should be able to add points', function () {
            p3 = Point.add(p1, p2);
            expect(p3.x).toEqual(6);
            expect(p3.y).toEqual(8);
        });

        it('should be able to subtract points', function () {
            p3 = Point.subtract(p1, p2);
            expect(p3.x).toEqual(-2);
            expect(p3.y).toEqual(-2);
        });

        it('should be able to multiply by a scalar', function () {
            p3 = Point.scalarMultiply(3, p1);
            expect(p3.x).toEqual(6);
            expect(p3.y).toEqual(9);
        });
    });
});