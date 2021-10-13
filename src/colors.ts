import { backgroundColors, effects, fontColors, Reset } from './model';
import {Colors, Effects, Options} from './types';
function addColor(text: string, color: string, isBackground = false) {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}
function getEffects(effectList: [Effects]) {
    return effectList.map(effect => effects[effect]).join('');
}
export function color(text: string, options: Options) {
    const preparedText = text.replace(/ё/g, 'е');
    let result = '';
    if (options) {
        if (options.font) {
            result = addColor(result, options.font);
        }
        if (options.background) {
            result = addColor(result, options.background, true);
        }
        if (options.effects) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
