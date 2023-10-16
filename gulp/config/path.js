import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const distFolder = "./dist";
const srcFolder = "./src";

export const path = {
    build: {
        html: `${distFolder}/`,
        css: `${distFolder}/css/`,
        javascript: `${distFolder}/js/`,
        files: `${distFolder}/imports/`
    },
    src: {
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`,
        javascript: `${srcFolder}/js/app.js`,
        files: `${srcFolder}/imports/**/*.*`
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        javascript: `${srcFolder}/js/**/*.*`,
        files: `${srcFolder}/imports/**/*.*`
    },
    clean: distFolder,
    buildFolder: distFolder,
    srcFolder: srcFolder,
    watchFolder: rootFolder,
    ftp: ``
};