import React from "react";
import { BsStarFill } from "react-icons/bs";
import ISkills from "./skillsData";

interface IProps {
  data: ISkills;
}

const SkillsTable = ({ data: { title, content } }: IProps) => {
  const cellStyle = { textAlign: "center" as "center", fontSize: "smaller" };
  const starColor = "#f9d71c";

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
                  <h5 className="skill-table-title">{skill.name}</h5>
                </td>
                <td style={cellStyle}>
                  {firstLine ? (
                    <h5 className="skill-table-title">
                      {newlineToBreak(skill.notions)}
                      <BsStarFill color={starColor} />
                    </h5>
                  ) : (
                    newlineToBreak(skill.notions)
                  )}
                </td>
                <td style={cellStyle}>
                  {firstLine ? (
                    <h5 className="skill-table-title">
                      {newlineToBreak(skill.pratique)}
                      <BsStarFill color={starColor} />
                      <BsStarFill color={starColor} />
                    </h5>
                  ) : (
                    newlineToBreak(skill.pratique)
                  )}
                </td>
                <td style={cellStyle}>
                  {firstLine ? (
                    <h5 className="skill-table-title">
                      {newlineToBreak(skill.maitrise)}
                      <BsStarFill color={starColor} />
                      <BsStarFill color={starColor} />
                      <BsStarFill color={starColor} />
                    </h5>
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
