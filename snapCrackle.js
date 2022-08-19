function snapCrackle (n){
    let finalStr = ''
    for(let i = 1; i <= n; i++){
        if(i % 2 == 0 && i % 5 != 0){
            finalStr += `${i}, `
        } else if (i % 2 == 0 && i % 5 == 0){
            finalStr += `crackle, `
        } else {
            if(i % 5 != 0){
                finalStr += 'Snap, '
            } else if (i % 5 == 0) {
                finalStr += 'SnapCrackle, '
            }
        }
    }
    finalStr = finalStr.slice(0, -2)
    console.log(finalStr)
    return finalStr
}

snapCrackle(25)