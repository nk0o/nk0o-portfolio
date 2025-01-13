export type themeColor = {
    navyColor: string;
    marinaBlueColor: string;
    activeBlueColor: string;
    stayBlueColor: string;
    membershipColor: string;
    blackColor: string;
    grayColor: string;
    grayColor2: string;
};

export const theme = {
    colors: {
        navyColor: '#00263A',
        marinaBlueColor: '#005587',
        activeBlueColor: '#84D2E6',
        stayBlueColor: '#8BB8E8',
        membershipColor: '#0093B2',
        blackColor: '#000000',
        grayColor: '#4D4D4D',
        grayColor2: '#7B7B7B',
    },
    fontDisplay: {
        kor: {
            large: `700 3.5rem/1.143 'KoPubWorldDotum'`,
            medium: `700 3em/1.1667 'KoPubWorldDotum'`,
            small: `700 2.5rem/1.2 'KoPubWorldDotum'`,
        },
        eng: {
            large: `700 3.5rem/1.143 'Noto Sans KR'`,
            medium: `700 3em/1.1667 'Noto Sans KR'`,
            small: `700 2.5rem/1.2 'Noto Sans KR'`,
        },
    },
    fontHeadline: {
        kor: {
            large: `700 2rem/1.25 'KoPubWorldDotum'`,
            medium: `700 1.75rem/1.286 'KoPubWorldDotum'`,
            small: `700 1.5rem/1.333 'KoPubWorldDotum'`,
        },
        eng: {
            large: `700 2rem/1.25 'Noto Sans KR'`,
            medium: `700 1.75rem/1.286 'Noto Sans KR'`,
            small: `700 1.5rem/1.333 'Noto Sans KR'`,
        },
    },
    fontTitle: {
        kor: {
            large: `700 1.375rem/1.2727 'KoPubWorldDotum'`,
            medium: `700 1.25rem/1.4 'KoPubWorldDotum'`,
            small: `700 1.125rem/1.333 'KoPubWorldDotum'`,
        },
        eng: {
            large: `700 1.375rem/1.2727 'Noto Sans KR'`,
            medium: `700 1.25rem/1.4 'Noto Sans KR'`,
            small: `700 1.125rem/1.333 'Noto Sans KR'`,
        },
    },
    fontBody: {
        style1: `500 1.125rem/1.3333 'KoPubDotum'`,
        style2: `500 1rem/1.375 'KoPubDotum'`,
        style3: `500 0.875rem/1.1428 'KoPubDotum'`,
        style4: `500 0.75rem/1.666 'KoPubDotum'`,
        style5: `500 0.656rem/1.24 'KoPubDotum'`,
        dpLarge: `400 3.5rem/1.1428 'Noto Sans KR'`,
        kor: {
            large: `400 1.125rem/1.3333 'KoPubWorldDotum'`,
            medium: `400 1rem/1.25 'KoPubWorldDotum'`,
            small: `400 0.875rem/1.286 'KoPubWorldDotum'`,
        },
        eng: {
            large: `400 1.125rem/1.3333 'Noto Sans KR'`,
            medium: `400 1rem/1.25 'Noto Sans KR'`,
            small: `400 0.875rem/1.286 'Noto Sans KR'`,
        },
    },

    breakpoints: {
        pc: '1440px',
        tablet: '1024px',
        mobile: '768px',
    },

    fontSize: {
        font56: {
            pc: '56px',
            tablet: '48px',
            mobile: '40px',
        },
        font48: {
            pc: '48px',
            tablet: '40px',
            mobile: '32px',
        },
        font28: {
            pc: '28px',
            tablet: '24px',
            mobile: '20px',
        },
        font24: {
            pc: '24px',
            tablet: '20px',
            mobile: '18px',
        },
        font22: {
            pc: '22px',
            tablet: '18px',
            mobile: '16px',
        },
        font18: {
            pc: '18px',
            tablet: '16px',
            mobile: '14px',
        },
        font16: {
            pc: '16px',
            tablet: '14px',
            mobile: '12px',
        },
        font14: {
            pc: '14px',
            tablet: '12px',
            mobile: '10px',
        },
    },

    headerHeight:{
        pc: '96px',
        mobile: '60px',
    },
    layoutPadding: '7.22%',
};

export type ThemeType = typeof theme;
