// // console.log("hello world")
// const name="sufd";//const=for declaring constant variable
// let number=0;
// // number++;
// // number='FDS';

// // console.log(number)
// const studentObject= {
//     NAME:"Ashish Kr Mishra",
//     BRANCH:"CSE",
//     CGPA:10,
//     "favorite hobby":"Milega to batayenge",
//     adress:{
//         city:"ja",
//         country:"India",
//         region:"Asia",
//     }
// };
// studentObject.CGPA=11
// const{NAME}=studentObject;
// console.log(studentObject)
// //  console.log(studentObject.NAME)//for specifically printing Name
// // console.log(studentObject["favorite hobby"])//for only printing the key

const parser = require('simple-excel-to-json')
var json2xls = require('json2xls');
const doc = parser.parseXls2Json('./Example.xlsx')[0]; 
const fs=require("fs");
const { STATUS_CODES } = require('http');

const totalcgpa=doc.reduce((preValue,current)=>{
    preValue+=current.CGPA
    // console.log(preValue)
    return preValue
},0)
const average=totalcgpa/doc.length;
const docWithAverage=[...doc];
const gradeDocuments=docWithAverage.map((student)=>{
    // console.log(student)
    // student.GRADE="A+"
    if(student.CGPA>9.5){
        student.GRADE="A+"
    }
    else if(student.CGPA>9.2 && student.CGPA>8){
        student.GRADE="A"
    } 
    return student
})
// docWithAverage.push({CGPA:average,NAME:"Avg"})
// const xlsData= json2xls(docWithAverage)
// console.log(average)

// fs.writeFileSync('data.xlsx', xlsData, 'binary');
console.log(gradeDocuments)