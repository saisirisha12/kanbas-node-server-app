import * as enrollmentsDao from "./dao.js";

export default function EnrollmentsRoutes(app) {
    // const enrollUserInCourse = async (req, res) => {
    //     // const currentUser = req.session["currentUser"];
    //     // const { courseId } = req.body; 
    //     const { userId, courseId } = req.params;

    //     if (userId==null || courseId==null) {
    //         res.sendStatus(401);
    //         return;
    //     }

    //     const enrollmentList = await dao.enrollUserInCourse(userId, courseId);
    //     res.json(enrollmentList);
    //   };

    //   app.post("/api/enrollments/:userId/:courseId", enrollUserInCourse);

      // app.delete("/api/enrollments/:userId/:courseId", async (req, res) => {
      //   const { userId, courseId } = req.params;
    
      //   if (userId==null || courseId==null) {
      //       res.sendStatus(401);
      //       return;
      //   }
      //   const enrollmentList = await dao.unenrollUserFromCourse(userId, courseId);
      //   res.json(enrollmentList);
      // });

      // app.get("/api/enrollments/:userId", async (req, res) => {
      //   const { userId } = req.params;
    
      //   if (userId==null) {
      //       res.sendStatus(401);
      //       return;
      //   }
      //   const enrollmentList = await dao.findMyEnrollments(userId);
      //   res.json(enrollmentList);
      // });
      const enrollUserInCourse = async (req, res) => {
        let { userId, courseId } = req.params;
        if (userId === "current") {
          const currentUser = req.session["currentUser"];
          userId = currentUser._id;
        }
        const status = await enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.send(status);
      };
      const unenrollUserFromCourse = async (req, res) => {
        let { userId, courseId } = req.params;
        if (userId === "current") {
          const currentUser = req.session["currentUser"];
          userId = currentUser._id;
        }
        const status = await enrollmentsDao.unenrollUserFromCourse(userId, courseId);
        res.send(status);
      };
      app.post("/api/users/:userId/courses/:courseId", enrollUserInCourse);
      app.delete("/api/users/:userId/courses/:courseId", unenrollUserFromCourse);
     
}