var courseArray = [
    courseOne = {
        courseName: 'Web Devlopment',
        courseDis: 'This Is Course Details.',
        courseImg: 'https://raw.githubusercontent.com/hmathir/green-university/main/images/course/course-1.png',
        coursePrice: '$99',
        courseStudents: '921 Enrolled'
    },
    courseTwo = {
        courseName: 'App Devlopment',
        courseDis: 'This Is Course Details.',
        courseImg: 'https://raw.githubusercontent.com/hmathir/green-university/main/images/course/course-2.png',
        coursePrice: '$69',
        courseStudents: '341 Enrolled'
    },
    courseThree = {
        courseName: 'Machine Learning',
        courseDis: 'This Is Course Details.',
        courseImg: 'https://raw.githubusercontent.com/hmathir/green-university/main/images/course/course-5.png',
        coursePrice: '$69',
        courseStudents: '432 Enrolled'
    },
    courseFour = {
        courseName: 'Motion Graphics',
        courseDis: 'This Is Course Details.',
        courseImg: 'https://raw.githubusercontent.com/hmathir/green-university/main/images/course/course-6.png',
        coursePrice: '$69',
        courseStudents: '324 Enrolled'
    },
    courseFive = {
        courseName: 'Graphics Design',
        courseDis: 'This Is Course Details.',
        courseImg: 'https://raw.githubusercontent.com/hmathir/green-university/main/images/course/course-1.png',
        coursePrice: '$69',
        courseStudents: '324 Enrolled'
    },
    courseSix = {
        courseName: 'Software Devlopment',
        courseDis: 'This Is Course Details.',
        courseImg: 'https://raw.githubusercontent.com/hmathir/green-university/main/images/course/course-5.png',
        coursePrice: '$69',
        courseStudents: '324 Enrolled'
    }
]

function allCourses(course){
    const parentCourse = document.getElementById('parent-course');
    const newDiv = document.createElement('div');
    const courseObjToString = JSON.stringify(course);
    newDiv.innerHTML = `
    <div class="col">
    <div class="card flex-column flex-md-row h-100">
      <img src="${course.courseImg}" class="img-fluid d-none d-md-block" alt="..." />
      <img src="${course.courseImg}" class="card-img-top d-block d-md-none" alt="..." height="300" />
      <div class="card-body">
        <h5 class="fw-bold card-title">${course.courseName}</h5>
        <p class="card-text">${course.courseDis}</p>
        <div class="d-flex justify-content-between">
          <p class="text-primary fw-bold">Price: ${course.coursePrice}</p>
          <p class="text-primary fw-bold">${course.courseStudents}</p>
        </div>
        <button onclick='detailsBtnClick(${courseObjToString})' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#courseDetails">
            Details
        </button>
      </div>
    </div>
  </div>
    `;
    parentCourse.appendChild(newDiv);
}

function showAllCourses(array){
    for(i = 0; i < array.length; i++){
        element = array[i];
        allCourses(element);
    }
}
showAllCourses(courseArray);

function detailsBtnClick(courses){
    document.getElementById('courseDetailsHeader').innerText = `${courses.courseName}`;
    const modalBody = document.getElementById('details-modal-body');
    modalBody.innerHTML = `
    <div class="card w-75 mx-auto" style="width: 18rem;">
  <img src="${courses.courseImg}" class="card-img-top" alt="...">
  <div class="card-body">
  <div class="d-flex justify-content-between">
  <p class="text-primary fw-bold">Price: ${courses.coursePrice}</p>
  <p class="text-primary fw-bold">${courses.courseStudents}</p>
</div>
    <p class="card-text">${courses.courseDis}</p>
    <button class="w-100 custom-admit-btn-color rounded-3 py-2 px-4" data-bs-toggle="modal"
    data-bs-target="#exampleModal" data-bs-dismiss="modal">
    Admit Now
  </button>
  </div>
</div>
    `;

}