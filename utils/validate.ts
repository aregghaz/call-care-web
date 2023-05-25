export default function validate(fields:any,requiredFields:Array<string>) {
    const errors:any = {}
    for (let currentField in fields) {
        if (requiredFields.includes(currentField) && !fields[currentField]) {
            errors[currentField] = "Field Required"
        }
    }
    console.log("Field Required")
    return errors
}