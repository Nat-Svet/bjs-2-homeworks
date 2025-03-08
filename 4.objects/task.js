function Student(name, gender, age) {
    this.name = name; 
    this.gender = gender; 
    this.age = age; 
    this.marks = []; 
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName; 
    return subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks) { 
        this.marks.push(...marks); 
    } else {
        return null;
    }
}

Student.prototype.getAverage = function () {
    let sum = 0;
    if (this.marks && this.marks.length > 0) { 
        for (let mark of this.marks) { 
            sum += mark;
        }
        return sum / this.marks.length; 
    } else {
        return 0;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.marks; 
    delete this.subject; 
    let additionalInfo = { excluded: reason }; 
    Object.assign(this, additionalInfo); 
}
