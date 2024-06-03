export default function getListStudentIds(array) {
    if (typeof array === 'string' || typeof array !== 'object') {
        return []
    }
    return array.map((value) => value["id"])
}