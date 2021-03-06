import { indentationString } from './constants';

export function collapseNewlines(source: string): string {
    return source.replace(/\n\s*\n+/g, "\n\n");
}

export function deindent(source: string) {
    let lines = source.split('\n');

    // remove leading and trailing whitespace
    while (isWhitespace(lines[0])) lines = lines.slice(1);
    while (isWhitespace(lines[lines.length - 1])) lines = lines.slice(0, lines.length - 1);

    // remove leading indentation
    while (lines.every(line => !!line.match(/^\s/g))) lines = lines.map(l => l.slice(1));

    return lines.join('\n');
}

/**
 * Escape a string for use as javascript source.
 * 
 * @param  {string} source
 * @return {string}
 */
export function escape(source: string): string {
    return source
        .replace(/\n/g, '\\r\\n')     // new lines
        .replace(/'/g, '\\\'')        // single quotes
        .replace(/"/g, '\\\"')        // double quotes
}

/**
 * Indent a string.
 * 
 * @param  {string} source
 * @param  {string} depth
 * @return {string}
 */
export function indent(source: string, depth: number = 1): string {
    return source.split('\n').map(line => indentationString + line).join('\n');
}

// determine if a string is nothing but whitespace
export function isWhitespace(text: string): boolean {
    return !!text.match(/^\s*$/g);
}

// split a text with interpolations
export function splitTextInterpolations(source: string): Array<string> {
    return source.split(/({{\s*[\w\.]+\s*}})/g).filter(str => str.length);
}