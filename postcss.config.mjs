if (!process.env.CSS_TRANSFORMER_WASM) {
    process.env.CSS_TRANSFORMER_WASM = '1';
}

const tailwindcss =
    (await import('@tailwindcss/postcss')).default;
const autoprefixer =
    (await import('autoprefixer')).default;

export default {
    plugins: [
        tailwindcss(),
        autoprefixer(),
    ],
};
