export default function DevSkill({ skill, level, color }) {
  const icon = (level == "beginner" && "👶") || (level == "intermediate" && "👍") || (level == "advanced" && "💪");
  return <span style={{ backgroundColor: color }}>{`${skill} ${icon}`}</span>;
}
