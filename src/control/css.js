import colorJs from 'color-js';
import * as glamor from 'glamor';


export { merge } from 'glamor';

export function color (input) {
    return colorJs(input);
}


export const flex = {
    horizontal: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    vertical: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    alignStart: {
        alignItems: 'flex-start'
    },
    alignCenter: {
        alignItems: 'center'
    },
    justifyEnd: {
        justifyContent: 'flex-end'
    },
    fluid: {
        flex: '1 1 auto'
    },
    fixed: {
        flex: '0 0 auto'
    }
};
export const display = {
    block: {
        display: 'block'
    },
    inlineBlock: {
        display: 'inline-block'
    }
};
export const position = {
    relative: { position: 'relative' },
    fixed: { position: 'fixed' },
    absolute: { position: 'absolute' }
};


const fg = color('#666666'),
    bg = color('#eeeeee');

export const palette = {
    fg: fg,
    fgDim: color('#999999'),
    //fgAlt: color('red'),
    bg: bg,
    bgAlt: color('#6c6cff'), //color('#008c39'),

    bgError: color('#ffd942'),
    error: fg
};

export const connotation = {
    interactive: {
        ':hover': {
            cursor: 'pointer'
        }
    }
};

const fontFamily = {
    normal: glamor.fontFace({
        fontFamily: 'Roboto Mono',
        fontStyle: 'normal',
        fontWeight: 400,
        src: "local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v4/hMqPNLsu_dywMa4C_DEpY4gp9Q8gbYrhqGlRav_IXfk.woff2) format('woff2')",
        unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215'
    })
};
const uiLength = 16;
export const steno = {
    header: {
        fontFamily: fontFamily.normal,
        fontSize: 2 * uiLength,
        lineHeight: 2 * uiLength + 'px',
        marginBottom: '0.25em'
    },
    normal: {
        fontFamily: fontFamily.normal,
        fontSize: 0.8 * uiLength,
        lineHeight: 1 * uiLength + 'px',
        whiteSpace: 'pre-wrap'
    },
    small: {
        fontFamily: fontFamily.normal,
        fontSize: 0.7 * uiLength,
        textTransform: 'uppercase',
        color: palette.fgDim,
        lineHeight: 1 * uiLength + 'px'
    },
    micro: {
        fontFamily: fontFamily.normal,
        fontSize: 0.6 * uiLength,
        color: palette.fgDim,
        textTransform: 'uppercase',
        lineHeight: 1 * uiLength + 'px'
    }
};

// glamor.insertGlobal('a[data-command]:hover, a[href]:hover', theme.inverseFocused);
