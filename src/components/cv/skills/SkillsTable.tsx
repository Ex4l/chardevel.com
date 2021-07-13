import useWindowSize from "@/hooks/useWindowSize";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles } from "@material-ui/core";
import { newline } from "@utils/jsxUtils";
import React from "react";
import { useTranslation } from "react-i18next";
import { BsStarFill } from "react-icons/bs";
import ISkills from "./skillsData";

interface IProps {
  data: ISkills;
}

const SkillsTable = ({ data: { title, content } }: IProps) => {
  const starColor = "#FDE74C";

  const { t } = useTranslation();

  const { width } = useWindowSize();

  const getFontSize = (width: number): string => {
    if (width <= 600) return "0.575rem"
    if (width > 600 && width <= 800) return "0.650rem"
    return "0.875rem"
  }

  const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#f6f8fa",
  },
  body: {
    fontSize: getFontSize(width),
    fontFamily: "georgia, serif",
    lineHeight: "1.25rem"
  },
  }))(TableCell);

  return (
    <div>
      <h2>{t(title)}</h2>
      <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
              <StyledTableCell className="skill-table-title" align="center">
                <h5>{t("skills.levels.notions")}</h5>
                <BsStarFill color={starColor} />
              </StyledTableCell>
              <StyledTableCell className="skill-table-title" align="center">
                <h5>{t("skills.levels.practice")}</h5>
                <BsStarFill color={starColor} />
                <BsStarFill color={starColor} />
              </StyledTableCell>
              <StyledTableCell className="skill-table-title" align="center">
                <h5>{t("skills.levels.mastery")}</h5>
                <BsStarFill color={starColor} />
                <BsStarFill color={starColor} />
                <BsStarFill color={starColor} />
              </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {content.skills.map((skill) => (
            <TableRow key={skill.name}>
              <StyledTableCell align="center"><h5 className="skill-table-title">{t(skill.name)}</h5></StyledTableCell>
              <StyledTableCell align="center">{newline(t(skill.notions))}</StyledTableCell>
              <StyledTableCell align="center">{newline(t(skill.practice))}</StyledTableCell>
              <StyledTableCell align="center">{newline(t(skill.mastery))}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default SkillsTable;
