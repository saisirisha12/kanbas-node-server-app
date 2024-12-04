import Database from "../Database/index.js";
import model from "./model.js";
export function findAssignmentsForModules(courseId) {
  // const { assignments } = Database;
  return model.find({ course: courseId });
}
export function createAssignment(assignment) {
  delete assignment._id
  return model.create(assignment);
    // const newAssignment = { ...assignment, _id: Date.now().toString() };
    // Database.assignments = [...Database.assignments, newAssignment];
    // return newAssignment;
  }
  export function deleteAssignment(assignmentId) {
    return model.deleteOne({ _id: assignmentId });
   }
   
   export function updateAssignment(assignmentId, assignmentUpdates) {
    return model.updateOne({ _id: assignmentId }, assignmentUpdates);
  }
  
   
  
