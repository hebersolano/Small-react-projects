import "./DevProfile.css";
import DevSkill from "./DevSkill";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

export default function DevProfile() {
  return (
    <div className="profile">
      <img src="https://avatars.githubusercontent.com/u/18718850?v=4" alt="profile-photo" />
      <div className="content">
        <h1>Jonas Schmedtmann</h1>
        <p>
          Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play
          boardgames, to cook (and eat), or to just enjoy the Portuguese sun at the beach.
        </p>
        <div className="skills">
          <p>
            {skills.map((data, i) => {
              return <DevSkill key={i} skill={data.skill} level={data.level} color={data.color} />;
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
