export type Effects = 'bright' | 'dim' | 'italic' | 'underscore' | 'blink';
export type Contrasts = 'black' | 'white';
export type Colors =  'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'black' | 'white';

export type Options = {
    font?: string;
    background?: Colors;
    effects?: [Effects];
    bold?: boolean;
    italic?: boolean;
    mono?: boolean;
    link?: string;
}