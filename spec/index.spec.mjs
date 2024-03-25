import { Greeter } from "../index.mjs";

describe("greet", function() {
    it('should return Hola Blanca', () => {
        const greeter = new Greeter();
        let result = greeter.greet();
        expect(result).toEqual("Hola Blanca")
    })

})