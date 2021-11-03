import styled from "@emotion/styled";
import React from "react";
import { ContentCard } from "./ContentCard";
import { ContentItem } from "./types";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

interface IntermediateCoursesProps {
  courses: ContentItem[];
}

export const IntermediateCoursesSection: React.FC<IntermediateCoursesProps> = ({
  courses,
}) => {
  return (
    <>
      <h2>Intermediate Courses</h2>
      <Container>
        {courses.map((course) => (
          <ContentCard course={course} />
        ))}
      </Container>
    </>
  );
};
