// Themed using Lyft's ColorBox (http://www.colorbox.io/) 6-step output

const theme = {
    white: '#FAFAFA',
    black: '#212121',
    dark: '#392D3B',
    darkAccent: '#8B8595',
    shades: {
        '0': '#f2fffa',
        '10': '#78f7cc',
        '20': '#1be5a6',
        '30': '#00c591',
        '40': '#009276',
        '50': '#005248'
    }
};

theme.primary = theme.shades['40'];
theme.primaryAccent = theme.shades['30'];

export default theme;
