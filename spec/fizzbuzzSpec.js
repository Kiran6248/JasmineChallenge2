describe("Fizzbuzz", function(){

    beforeEach(function(){
       Fizzbuzz = new fizzbuzz(); 
    });

    describe("Returns number, fizz, buzz or fizzbuzz", function(){
        it("should exist", function(){
            expect(fizzbuzz).toBeDefined();
        });

        it("should return Fizz when called as fizzbuzz(9)", function(){
            var result = fizzbuzz(9);
            expect(result).toBe("Fizz");
        });

         it("should return Buzz when called as fizzbuzz(10)", function(){
            var result = fizzbuzz(10);
            expect(result).toBe("Buzz");
        });

         it("should return FizzBuzz when called as fizzbuzz(15)", function(){
            var result = fizzbuzz(15);
            expect(result).toBe("FizzBuzz");
        });

         it("should return 2 when called as fizzbuzz(2)", function(){
            var result = fizzbuzz(2);
            expect(result).toBe(2);
        });

    });
});