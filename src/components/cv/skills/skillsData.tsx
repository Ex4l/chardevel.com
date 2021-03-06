export default interface ISkillsData {
  title: string;
  content: {
    skills: ISkill[];
  };
}

interface ISkill {
  name: string;
  notions: string;
  practice: string;
  mastery: string;
}
