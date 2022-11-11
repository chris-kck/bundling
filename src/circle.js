class Circle {
    constructor(radius=1) {
        this.radius = radius;
    }
    area() {
        return (Math.PI * this.radius * this.radius).toFixed(2);
    }
    circumference() {
        return (2 * Math.PI * this.radius).toFixed(2);
    }
    diameter() {
        return (2 * this.radius).toFixed(2);
    }

    static circleFromDiameter(diameter) {
        return new Circle(diameter / 2);
    }

    toString() {
        return `This is a Circle with radius ${this.radius}, diameter ${this.diameter()}, area ${this.area()}, and circumference ${this.circumference()}`;
    }

}

export default Circle;