export class pseudoENUM {
    constructor(keys) {
        keys.map(key => this[key] = key)
        Object.freeze(this)
    }
}

// Merge a `source` object to a `target` recursively
export const deepMerge = (target, source) => {
    // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
    for (const key of Object.keys(source)) {
        if (source[key] instanceof Object && key in target) Object.assign(source[key], deepMerge(target[key], source[key]))
    }
  
    // Join `target` and modified `source`
    Object.assign(target || {}, source)
    
    return target
}

export const RoundUp = (num, place) => Math.round(Number(num)*Math.pow(10,place))/Math.pow(10,place)