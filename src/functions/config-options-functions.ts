import {AccordionType, BannerType, OptionConfig, WebElementLayoutType} from "lkt-vue-kernel";

export const getAccordionTypeOptions = () => {
    return <Array<OptionConfig>>[
        {
            value: AccordionType.Auto,
            label: 'Auto',
        },
        {
            value: AccordionType.Always,
            label: 'Always',
        },
        {
            value: AccordionType.Lazy,
            label: 'Lazy',
        },
        {
            value: AccordionType.Ever,
            label: 'Ever',
        },
    ];
}

export const getBannerTypeOptions = () => {
    return <Array<OptionConfig>>[
        {
            value: BannerType.Static,
            label: 'Static',
        },
        {
            value: BannerType.Parallax,
            label: 'Parallax',
        },
    ];
}

export const getLayoutTypeOptions = () => {
    return <Array<OptionConfig>>[
        {
            value: WebElementLayoutType.Grid,
            label: 'Grid',
        },
        {
            value: WebElementLayoutType.FlexRow,
            label: 'Flex Row',
        },
        {
            value: WebElementLayoutType.FlexRows,
            label: 'Flex Rows',
        },
        {
            value: WebElementLayoutType.FlexColumn,
            label: 'Flex Column',
        }
    ];
}

export const getLayoutAmountOfItemsOptions = () => {
    let breakpoints = {
        'default': {
            css: '{n}',
            label: 'Default: {n}',
            columns: ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
        'from768': {
            css: '{n}--from-768',
            label: 'From 768px: {n}',
            columns: ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
    };

    let r = <Array<OptionConfig>>[];

    for (let breakpoint in breakpoints) {
        //@ts-ignore
        let breakpointConfig = breakpoints[breakpoint];

        if (!breakpointConfig.columns
            || !Array.isArray(breakpointConfig.columns)
            || breakpointConfig.columns.length === 0) continue;

        for (let i in breakpointConfig.columns) {
            let key = breakpointConfig.columns[i].toString();
            r.push({
                value: breakpointConfig.css.replace('{n}', key),
                label: breakpointConfig.label.replace('{n}', key),
            })
        }
    }

    return r;
}