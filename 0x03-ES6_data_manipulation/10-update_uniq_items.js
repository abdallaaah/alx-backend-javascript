export default function (map) {
    function check(value, key, map) {
        if (value === 1) {
            map.set(key, 100)
        }
        
    }
    map.forEach(check);
    return map
}