import os from 'os';

const homeDirectory = os.homedir();

export default function untildify(pathWithTilde) {
    if (typeof pathWithTilde !== 'string') {
        throw Error(`Expected a string, got ${typeof pathWithTilde}`);
    }

    return homeDirectory ? pathWithTilde.replace(/^~(?=$|\/|\\)/, homeDirectory)
        : pathWithTilde;
}
