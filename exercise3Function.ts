// Function 1
function sum(a: number, b: number): number {
    return a + b;
}

// Function 2
function getFixedNumber(): number{
    return 23;
}
// Function 3
function formatString(text: string, toUpperCase?: boolean): string {
    if (toUpperCase) {
        return text.toUpperCase(); // Fixed the extra space
    } else {
        return text.toLowerCase();
    }
}