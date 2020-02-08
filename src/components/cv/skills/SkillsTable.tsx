import React from "react";
import ISkills from "./skillsData";

interface IProps {
  data: ISkills;
}

const SkillsTable = ({ data: { title, content } }: IProps) => {
  const cellStyle = { textAlign: "center" as "center", fontSize: "smaller" };

  const newlineToBreak = (text: string): JSX.Element[] => {
    return text.split("\n").map((item, key) => {
      return (
        <span key={key}>
          {item}
          <br />
        </span>
      );
    });
  };

  return (
    <div>
      <h2>{title}</h2>
      <table>
        <tbody>
          {content.skills.map((skill, index) => {
            const firstLine = index === 0;

            return (
              <tr key={`${skill.name}-${index}`}>
                <td style={cellStyle}>
                  <h5>{skill.name}</h5>
                </td>
                <td style={cellStyle}>
                  {firstLine ? (
                    <h5>{newlineToBreak(skill.notions)}</h5>
                  ) : (
                    newlineToBreak(skill.notions)
                  )}
                </td>
                <td style={cellStyle}>
                  {firstLine ? (
                    <h5>{newlineToBreak(skill.pratique)}</h5>
                  ) : (
                    newlineToBreak(skill.pratique)
                  )}
                </td>
                <td style={cellStyle}>
                  {firstLine ? (
                    <h5>{newlineToBreak(skill.maitrise)}</h5>
                  ) : (
                    newlineToBreak(skill.maitrise)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SkillsTable;
