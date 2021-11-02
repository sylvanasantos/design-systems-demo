import styled from "@emotion/styled";
import React from "react";
import { RecommendationCard } from "./RecommendationCard";
import { ContentItem } from "./types";

const Background = styled.div`
  background-color: #fff0e5;
  padding: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
  padding: 1rem;
`;

interface RecommendedSectionProps {
  courses: ContentItem[];
}

export const RecommendedSection: React.FC<RecommendedSectionProps> = ({
  courses,
}) => {
  return (
    <Background>
      <h1>Recommended For You</h1>
      <Grid>
        {courses.map((course) => (
          <RecommendationCard recommendation={course} />
        ))}
      </Grid>
    </Background>
  );
};
