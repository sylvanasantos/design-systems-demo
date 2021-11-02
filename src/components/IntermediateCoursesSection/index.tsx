import styled from "@emotion/styled";
import React from "react";
import { ContentCard } from "./ContentCard";
import { ContentItem } from "./types";

const Background = styled.div`
  background-color: #fff0e5;
  padding: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

interface IntermediateCoursesProps {
  courses: ContentItem[];
}

export const IntermediateCoursesSection: React.FC<IntermediateCoursesProps> = ({
  courses,
}) => {
  return (
    <Background>
      <h1>Intermediate Courses</h1>
      <Container>
        {courses.map((course) => (
          <ContentCard course={course} />
        ))}
      </Container>
    </Background>
  );
};
