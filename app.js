import express from "express";

let totalPosts = [];

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
const PORT = 3000;
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/admin", async (req, res) => {
  console.log(posts);
  res.render("summary", { posts });
});

app.post("/summary", (req, res) => {
  const post = {
    workout_type: req.body.workout_type,
    duration: req.body.duration,
    intensity: req.body.intensity,
    notes: req.body.notes,
    when_complete: req.body.when_complete,
  };

  console.log(post);
  totalPosts.push(post);
  console.log(totalPosts);
  res.render("summary", { totalPosts });
});

//Tell the server to listen on our specified port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
