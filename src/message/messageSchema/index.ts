export const msgSchema = {
  required: "Campo obrigatório.",

  min: (minCharacters: number) => `Mínimo de  ${minCharacters} caracteres.`,
  max: (maxCharacters: number) => `Máximo de  ${maxCharacters} caracteres.`,
};
