import * as dao from "./dao.js";

export default function EnrollmentsRoutes(app) {
    const enrollUserInCourse = async (req, res) => {
        // const currentUser = req.session["currentUser"];
        // const { courseId } = req.body; 
        const { userId, courseId } = req.params;

        if (userId==null || courseId==null) {
            res.sendStatus(401);
            return;
        }

        const enrollmentList = await dao.enrollUserInCourse(userId, courseId);
        res.json(enrollmentList);
      };

      app.post("/api/enrollments/:userId/:courseId", enrollUserInCourse);

      app.delete("/api/enrollments/:userId/:courseId", async (req, res) => {
        const { userId, courseId } = req.params;
    
        if (userId==null || courseId==null) {
            res.sendStatus(401);
            return;
        }
        const enrollmentList = await dao.unenrollUserFromCourse(userId, courseId);
        res.json(enrollmentList);
      });

      app.get("/api/enrollments/:userId", async (req, res) => {
        const { userId } = req.params;
    
        if (userId==null) {
            res.sendStatus(401);
            return;
        }
        const enrollmentList = await dao.findMyEnrollments(userId);
        res.json(enrollmentList);
      });
}