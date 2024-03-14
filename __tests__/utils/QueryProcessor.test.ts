import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id', () => {
        const query = "andrew";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Your (my) Andrew ID is elwei."
        ));
    })

    test('should return name', () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "summit"
        ));
    })

    test('should take max', () => {
        const query = "largest 42, 50, 51";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "51"
        ));
    })

    test('should take sum', () => {
        const query = "12 plus 15";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "27"
        ));
    })

    test('should take product', () => {
        const query = "12 multiplied 15";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "180"
        ));
    })

    test('should find square-cube', () => {
        const query = "square and cube 4411 3601 4169 729 64 3169 4489";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "729 64"
        ));
    })

    test('should find primes', () => {
        const query = "primes 31 33 2 43 96";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "31 2 43"
        ));
    })

    test('should do minus', () => {
        const query = "4 minus 74";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "-70"
        ));
    })
});