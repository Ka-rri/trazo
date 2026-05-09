export function simpson(f, a, b, n) {
    if (n % 2 !== 0) {
        throw new Error("n must be even");
    }

    const h = (b - a) / n;

    let sum = f(a) + f(b);

    for (let i = 1; i < n; i++) {
        const x = a + i * h;

        if (i % 2 === 0) {
            sum += 2 * f(x);
        } else {
            sum += 4 * f(x);
        }
    }

    const value = (h / 3) * sum;

    const errorEstimate = Math.abs(h ** 4);

    return {
        value,
        errorEstimate
    };
}