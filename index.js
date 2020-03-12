const express = require("express");
const app = express();

app.use(express.json());

const courses = [
  { id: 1, course: "course 1" },
  { id: 2, course: "course 2" },
  { id: 3, course: "course 3" },
  { id: 4, course: "course 4" }
];

app.get("/", (req, res) => {
  res.send("helloo shenay !!!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("The course with given ID was not  found.");
  res.send(course);
});

app.post("/api/courses/", (req, res) => {
  const course = {
    id: courses.length + 1,
    course: req.body.course
  };

  courses.push(course);
  res.send(course);
});

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`listening on port ${port}....`);
});
