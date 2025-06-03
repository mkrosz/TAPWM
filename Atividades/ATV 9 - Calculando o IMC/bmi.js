/**
 * Este objeto armazena os parâmetros L, M, S para cada mês-de-vida (24 a 240 meses)
 * e para cada sexo (“M” = masculino, “F” = feminino).
 * Dados extraídos de “CDC Growth Charts – BMI-for-age (2–20 years) L, M, S CSV”.
 *
 * Na prática, você terá algo como:
 *   bmiLms.M["24"] = { L: -0.3521, M: 16.575,   S: 0.08009 }
 *   bmiLms.M["25"] = { L: -0.3521, M: 16.884,   S: 0.08044 }
 *   ...
 *   bmiLms.F["24"] = { L: -0.3833, M: 16.575,   S: 0.08031 }
 *   ...
 * E assim por diante até 240 (20 anos = 240 meses).
 */

const bmiLms = {
  M: {
    // idades em meses (apenas EXEMPLO – use todos os meses do CSV)
    // Mês 24 (2 anos completos)
    24: { L: -0.3521, M: 16.575, S: 0.08009 },
    // Mês 25
    25: { L: -0.3521, M: 16.884, S: 0.08044 },
    // Mês 26
    26: { L: -0.3521, M: 17.175, S: 0.0808 },
    // ...
    // Copie e cole **TODAS** as linhas (até “240”).
    // O arquivo original CSV do CDC possui 237 linhas (de 24 até 240), para cada sexo.
  },
  F: {
    24: { L: -0.3833, M: 16.575, S: 0.08031 },
    25: { L: -0.3833, M: 16.884, S: 0.08056 },
    26: { L: -0.3833, M: 17.175, S: 0.08091 },
    // ... e assim por diante até "240"
  },
};

// Para baixar o CSV oficial do CDC (L, M, S para BMI-for-age 2–20 anos):
// https://www.cdc.gov/growthcharts/percentile_data_files.htm
// Procure por “BMI-for-age (2 to 20 years) L, M, S” (há um CSV para “Boys” e outro para “Girls”).
// Depois você converte cada linha em algo como: bmiLms["M"][idadeEmMeses] = { L: ..., M: ..., S: ... };
