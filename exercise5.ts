class Calculator {
    //Method
    private validateInputs (a:any, b:any): boolean{
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Inputs must be numbers.");
        }
        return true;
    }

    // Addition
    add(a: number, b: number): number {
        this.validateInputs(a, b);
        return a + b;
    }

    // Subtraction
    subtract(a: number, b: number): number {
        this.validateInputs(a, b);
        return a - b;
    }

    // Multiplication
    multiply(a: number, b: number): number {
        this.validateInputs(a, b);
        return a * b;
    }

    // Division
    divide(a: number, b: number): number {
        this.validateInputs(a, b);
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}
