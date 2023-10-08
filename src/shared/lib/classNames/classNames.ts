type Mods = Record<string, boolean|string>

export const classNames = (cls: string, mods: Mods, additional: string[]): string => {
    return [cls, ...additional, ...Object.entries(mods).filter((_key,value)=>{Boolean(value)}).map((key,_value)=>key)].join(" ")
}