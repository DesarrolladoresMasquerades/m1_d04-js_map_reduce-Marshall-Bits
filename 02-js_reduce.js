// Class code examples
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const sum = numbers.reduce(

    (accumulator, currentElement) => {
        accumulator += currentElement
        return accumulator  // MUST ALWAYS return the accumulator
    },
    0
    // Starting value of the accumulator is teh second parameter
)

console.log(sum);

const students = [
    {
        firstName: 'John',
        lastName: 'Carr',
        age: 34
    },
    {
        firstName: 'Leonardo',
        lastName: 'Di Vittorio',
        age: 21
    },
    {
        firstName: 'Jessy',
        lastName: "Mc Scrudge",
        age: 99
    },
    {
        firstName: 'Lisa',
        lastName: "Parker",
        age: 22
    },
    {
        firstName: 'Marco',
        lastName: "Santo",
        age: 48
    }
]




const summary = students.reduce(
    (count, student) => {
        if (student.age > 30) return count += 1
        else return count
    },
    0
)

console.log(summary);

const classRoster = students.reduce(
    (roster, student)=>{
        roster.push(`${student.firstName} ${student.lastName}`)
        return roster
    }
    ,
    []
)

console.log(classRoster);