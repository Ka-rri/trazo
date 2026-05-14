export function lagrange({ puntos, x }) {
    for (let i = 0; i < puntos.length; i++) {
        for (let j = i + 1; j < puntos.length; j++) {
            if (puntos[i][0] === puntos[j][0]) {
                throw new Error("Dos puntos tienen el mismo valor de x");
            }
        }
    }

    let resultado = 0;
    const n = puntos.length;

    for (let i = 0; i < n; i++) {
        let Li = 1;
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                Li *= (x - puntos[j][0]) / (puntos[i][0] - puntos[j][0]);
            }
        }
        resultado += puntos[i][1] * Li;
    }

    return { resultado, iteraciones: n };
}
