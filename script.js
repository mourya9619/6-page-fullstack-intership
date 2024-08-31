document.addEventListener('DOMContentLoaded', () => {
    loadStudentSubmissions();
});

function loadStudentSubmissions() {
    const students = [
        { name: 'John Doe', status: 'Ungraded' },
        { name: 'Jane Smith', status: 'Graded' },
        { name: 'Alice Johnson', status: 'Ungraded' },
    ];

    const studentList = document.getElementById('student-list');
    studentList.innerHTML = '';

    students.forEach(student => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${student.name} - ${student.status}`;
        studentList.appendChild(listItem);
    });
}

function reviewAutomatedGrading() {
    alert('Reviewing automated grading...');
}

function submitGrade() {
    alert('Grade submitted!');
}

function bulkGrade() {
    alert('Bulk grading...');
}

function regradeSubmission() {
    alert('Regrading submission...');
}

function returnToStudent() {
    alert('Assessment returned to student!');
}

