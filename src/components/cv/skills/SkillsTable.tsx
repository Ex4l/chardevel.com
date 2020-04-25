import React from "react";
import { BsStarFill } from "react-icons/bs";
import { newline } from "src/utils/jsxUtils";
import ISkills from "./skillsData";

interface IProps {
  data: ISkills;
}

const SkillsTable = ({ data: { title, content } }: IProps) => {
  const cellStyle = { textAlign: "center" as "center", fontSize: "smaller" };
  const starColor = "#FDE74C";

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
                      {newline(skill.notions)}
                      <BsStarFill color={starColor} />
                    </h5>
                  ) : (
                    newline(skill.notions)
                  )}
                </td>
                <td style={cellStyle}>
                  {firstLine ? (
                    <h5 className="skill-table-title">
                      {newline(skill.pratique)}
                      <BsStarFill color={starColor} />
                      <BsStarFill color={starColor} />
                    </h5>
                  ) : (
                    newline(skill.pratique)
                  )}
                </td>
                <td style={cellStyle}>
                  {firstLine ? (
                    <h5 className="skill-table-title">
                      {newline(skill.maitrise)}
                      <BsStarFill color={starColor} />
                      <BsStarFill color={starColor} />
                      <BsStarFill color={starColor} />
                    </h5>
                  ) : (
                    newline(skill.maitrise)
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
