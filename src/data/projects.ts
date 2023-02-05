import {
    calculatorapp,
    chocolateshop,
    clientwebsite,
    persionalblog,
    travellingblog,
} from "../assets";

export type ProjectType = {
    id: number;
    name: string;
    type: string;
    desc?: string;
    packages: PackageType[];
    preview: string;
    source: string;
    image: string;
};

export type PackageType = {
    name: string;
    className: string;
};

const html: PackageType = {
    name: "HTML",
    className: "text-blue-500",
};
const typeScript: PackageType = {
    name: "TypeScript",
    className: "text-blue-500",
};
const tailwind: PackageType = {
    name: "TailwindCss",
    className: "text-blue-500",
};

const scss: PackageType = {
    name: "SCSS",
    className: "text-blue-500",
};
const styledComponent: PackageType = {
    name: "Styled-component",
    className: "text-blue-500",
};
const routerDom: PackageType = {
    name: "React-Router-Dom",
    className: "text-blue-500",
};
export const projects: ProjectType[] = [
    {
        id: 1,
        name: "Calculator App",
        type: "App",
        desc: "Description of item 1",
        packages: [html, typeScript, tailwind],
        preview: "https://thuchuynhct.github.io/calculator/",
        source: "https://github.com/thuchuynhct/calculator.git",
        image: calculatorapp,
    },
    {
        id: 2,
        name: "Client Website",
        type: "Ecommerce",
        desc: "Description of item 2",
        packages: [html, typeScript, routerDom, scss],
        preview: "https://thuchuynhct.github.io/client-webiste/",
        source: "https://github.com/thuchuynhct/client-webiste.git",
        image: clientwebsite,
    },
    {
        id: 3,
        name: "Personal Blog",
        type: "Blog",
        desc: "Description of item 3",
        packages: [html, typeScript, routerDom, tailwind],
        preview: "https://thuchuynhct.github.io/personal-blog/",
        source: "https://github.com/thuchuynhct/personal-blog.git",
        image: persionalblog,
    },
    {
        id: 4,
        name: "Travelling Blog",
        type: "Blog",
        desc: "Description of item 4",
        packages: [html, typeScript, routerDom, styledComponent],
        preview: "https://thuchuynhct.github.io/travelling-blog/",
        source: "https://github.com/thuchuynhct/travelling-blog.git",
        image: travellingblog,
    },
    {
        id: 5,
        name: "Chocolate Shop",
        type: "Store",
        desc: "Description of item 5",
        packages: [html, typeScript, routerDom, scss],
        preview: "https://thuchuynhct.github.io/chocolate-shop/",
        source: "https://github.com/thuchuynhct/chocolate-shop.git",
        image: chocolateshop,
    },
];

export const websiteType: string[] = ["App", "Blog", "Store", "Ecommerce"];
