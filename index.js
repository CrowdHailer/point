function Point (x, y) {
    this.x = x;
    this.y = y;
}

exports.create = function (x, y) {
    return new Point(x, y);
};

exports.isPoint = function (obj) {
    return (obj.constructor === Point);
};

exports.add = function (p, q) {
    return new Point(p.x + q.x, p.y + q.y);
};

exports.subtract = function (p, q) {
    return new Point(p.x - q.x, p.y - q.y);
};

exports.scalarMultiply = function (a, p) {
    return new Point(a * p.x, a * p.y);
};