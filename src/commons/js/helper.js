function addStr(str, index, stringToAdd){
    return str.substring(0, index) + stringToAdd + str.substring(index);
}

export const removeCharacter = (str, char) =>{
    let resStr = "";
    let lengtStr = str.length;
    for(let i = 0; i < lengtStr; i++){
        if(str[i] !== char){
            resStr += str[i]
        }
    }
    return resStr;
}

export const convertPice = str =>{
    let resStr = str;
    let lengtStr = str.length;

    if(lengtStr > 3){
        for(let i = lengtStr - 3; i > 0; i-= 3){
            resStr = addStr(resStr, i, ',');
        }
    }
    
    return resStr;
}

export const removeSpaveRedundancy = (str) =>{
    let res = ""
    let lengthStr = str.trim().length

    for(let i = 0; i < lengthStr; i++){
        if(res[i] === res[i + 1] && res[i] === ' '){
            continue
        }
        res += str[i]
    }

    return res
}

export const createAlias = str =>{
    let res = ""
    res = str.replace(' ', '-').toLowerCase()
    return res
}
