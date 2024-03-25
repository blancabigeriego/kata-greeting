import { Greeter } from "../index.mjs";

describe("greet", function() {
    it('should return Hola Blanca', () => {
        const greeter = new Greeter();
        let result = greeter.greet("Blanca");
        expect(result).toEqual("Hola Blanca")
    });
    it('should greet Manuel', () => {
        const greeter = new Greeter();
        let result = greeter.greet("Manuel");
        expect(result).toEqual("Hola Manuel")
    })

})