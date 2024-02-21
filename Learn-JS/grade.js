// function gradingStudents(grades) {
//     // Iterate through each student's grade
//     for (let i = 0; i < grades.length; i++) {
//         // Get the current grade
//         const grade = grades[i];
        
//         // Check if rounding is needed
//         if (grade >= 38) {
//             // Calculate the next multiple of 5
//             const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
            
//             // Check if rounding is required based on the conditions
//             if (nextMultipleOf5 - grade < 3) {
//                 // Round up to the next multiple of 5
//                 grades[i] = nextMultipleOf5;
//             }
//         }
//     }

//     return grades;
// }

// // Example usage

function gradingStudents(grades){
    for (let i = 0 ; i < grades.length ; i++){
        let grade = grades[i];
        if(grade >= 38){
            let cGrade = Math.ceil(grade/5)*5;

            if(cGrade - grade > 3){
                grades[i] = cGrade ;
            }
        }
    }
    return grades;
}




const initialGrades = [73, 69, 38, 33];
const roundedGrades = gradingStudents(initialGrades);
console.log(roundedGrades);



