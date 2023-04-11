function Student (name, surname, yearOfBirth, grades) {
    this.attendance = new Array(25);
    this.grades = grades;
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.getAge = function () {
        return new Date().getFullYear() - this.yearOfBirth
    }
    this.getAvgGrade = function () {
        let sumGrades = 0
        for (let i=0; i<this.grades.length; i++) {
            sumGrades += this.grades[i]
        }
        return (sumGrades/this.grades.length).toFixed()
    }
    this.present = function () {
        let i = this.attendance.findIndex((el)=> el===undefined)
        if (i ===-1){
            throw "Превышен лимит записи"
        }
        this.attendance[i] = true
    }
    this.absent = function () {
        let i = this.attendance.findIndex((el)=> el===undefined)
        if (i ===-1){
            throw "Превышен лимит записи"
        }
        this.attendance[i] = false
    }
    this.getAvgAttendance = function () {
        let totalLessons = this.attendance.filter((el)=> el!==undefined).length
        let totalAttendance = this.attendance.filter((el)=> el===true).length
        return (totalAttendance/totalLessons).toFixed(1)
    }
    this.summary = function () {
        let avgGrade = this.getAvgGrade()
        let avgAttendance = this.getAvgAttendance()
        if (avgGrade>=90 && avgAttendance>=0.9) {
            return "Молодець"
        }
        if (avgGrade>=90 || avgAttendance>=0.9) {
            return "Добре, але можна краще "
        }
        return  "Редиска!"
    }
}
let student1 = new Student("Natalia", "Maximenko", 2000, [99,99,98,97,99,100,100])
let student2 = new Student("Petro", "Shevchenko", 1998, [80,99,99,100,99,85,94])
let student3 = new Student("Elena", "Kotova", 1999, [70,90,80,88,76,54,69])
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student2.present()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.present()
student3.present()
student3.absent()
student3.absent()
student3.absent()
student3.absent()
student3.absent()
console.log(student1.name, student1.getAge(), student1.getAvgGrade(),student1.getAvgAttendance(), student1.summary())
console.log(student2.name, student2.getAge(), student2.getAvgGrade(),student2.getAvgAttendance(), student2.summary())
console.log(student3.name, student3.getAge(), student3.getAvgGrade(),student3.getAvgAttendance(), student3.summary())
