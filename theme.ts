export type themeColor = {
    navyColor: string;
    blackColor: string;
    grayColor: string;
    grayColor2: string;
};

export const theme = {
    colors: {
        navyColor: '#00263A',
        blackColor: '#000000',
        grayColor: '#4D4D4D',
        grayColor2: '#7B7B7B',
    },
    breakpoints: {
        pc: '1440px',
        tablet: '1024px',
        mobile: '768px',
    },
    headerHeight:{
        pc: '96px',
        mobile: '60px',
    }
};

export type ThemeType = typeof theme;
