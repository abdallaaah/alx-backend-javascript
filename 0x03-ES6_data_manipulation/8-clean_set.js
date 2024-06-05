function cleanSet (set, start) {
    let s = ""
    let x = 1
    function justTest (item, index, arr) {
        if (start.length > 0) {
            x++;
            if(item.startsWith(start)){
                s+= item.replace(start, "")
                if(x !== set.size) {
                    s+= '-'
                }
                
            }
    }}
    set.forEach(justTest)
    return s
}
export default cleanSet