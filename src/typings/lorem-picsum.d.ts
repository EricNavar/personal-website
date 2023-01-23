type LoremPicsumProps = {
    width: number;
    height: number;
    random: boolean;
};

declare module 'lorem-picsum' {
    export default function loremPicsum(props: LoremPicsumProps): string;
}
