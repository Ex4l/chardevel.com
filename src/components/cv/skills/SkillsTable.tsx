import React from "react";
import { useTranslation } from "react-i18next";
import { BsStarFill } from "react-icons/bs";
import { newline } from "src/utils/jsxUtils";
import ISkills from "./skillsData";

interface IProps {
  data: ISkills;
}

const SkillsTable = ({ data: { title, content } }: IProps) => {
  const cellStyle = { textAlign: "center" as "center", fontSize: "smaller" };
  const starColor = "#FDE74C";

  const { t } = useTranslation();

  return (
    <div>
      <h2>{t(title)}</h2>
      <table>
        <tbody>
          {content.skills.map((skill, index) => {
            const firstLine = index === 0;

            return (
              <tr key={`${skill.name}-${index}`}>
                <td style={cellStyle}>
                  <h5 className="skill-table-title">{t(skill.name)}</h5>
                </td>
                <td style={cellStyle}>
                  {firstLine ? (
                    <h5 className="skill-table-title">
                      {newline(t(skill.notions))}
                      <BsStarFill color={starColor} />
                    </h5>
                  ) : (
                    newline(t(skill.notions))
                  )}
                </td>
                <td style={cellStyle}>
                  {firstLine ? (
                    <h5 className="skill-table-title">
                      {newline(t(skill.practice))}
                      <BsStarFill color={starColor} />
                      <BsStarFill color={starColor} />
                    </h5>
                  ) : (
                    newline(t(skill.practice))
                  )}
                </td>
                <td style={cellStyle}>
                  {firstLine ? (
                    <h5 className="skill-table-title">
                      {newline(t(skill.mastery))}
                      <BsStarFill color={starColor} />
                      <BsStarFill color={starColor} />
                      <BsStarFill color={starColor} />
                    </h5>
                  ) : (
                    newline(t(skill.mastery))
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
