module.exports = {
    './**/*.{ts,tsx}': (files) => {
        return `nx affected --target=typecheck --files=${files.join(',')}`;
    },
    './**/*.{js,ts,jsx,tsx,json,html,scss}': [
        (files) => `nx affected:lint --files=${files.join(',')}`,
        (files) => `nx format:write --files=${files.join(',')}`,
    ],
};
