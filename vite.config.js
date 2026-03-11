
import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const packageVersion = JSON.parse(readFileSync('package.json', 'utf-8')).version;
if (typeof packageVersion !== 'string') {
    throw new Error(`Cannot obtain package version from package.json`);
}

const gitHash = execSync('git rev-parse --short HEAD').toString().trim();
if (typeof gitHash !== 'string') {
    throw new Error(`Cannot obtain git commit hash`);
}

export default {
    define: {
        __PACKAGE_VERSION__: JSON.stringify(packageVersion),
        __GIT_HASH__: JSON.stringify(gitHash),
    },
    server: {
        hmr: false,
    },
    base: './',
};
