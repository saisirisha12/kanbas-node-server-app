import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
  return enrollments
}   
export function unenrollUserFromCourse(userId, courseId) {
    const { enrollments } = Database;
  
    const index = enrollments.findIndex(
      (enrollment) => enrollment.user === userId && enrollment.course === courseId
    );
  
    if (index > -1) {
      enrollments.splice(index, 1);
    }
    return enrollments;
  }


  export function findMyEnrollments(userId) {
    const { enrollments } = Database;
  
    const enrollmentsList = enrollments.filter(
      (enrollment) => enrollment.user === userId);
  
    return enrollmentsList;
  }
