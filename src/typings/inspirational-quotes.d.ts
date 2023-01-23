type QuoteProps = {
    getRandomQuote: () => string;
};

declare module 'inspirational-quotes' {
    export function getRandomQuote(): string;
}
