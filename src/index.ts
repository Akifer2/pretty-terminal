import colors from "./colors";
import icons from "./icons";

export function colorize(color: keyof typeof colors, text: string): string {
    const colorCode = colors[color];

    if (!colorCode) {
        throw new Error(`${color} is not defined`);
    }

    return `\x1b[${colorCode}m${text}\x1b[0m`;
}

export function iconize(icon: keyof typeof icons, text: string): string {
    const iconCode = icons[icon];

    if (!iconCode) {
        throw new Error(`${icon} is not defined`);
    }

    return `${iconCode} ${text}`;
}
