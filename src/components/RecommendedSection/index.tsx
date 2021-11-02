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
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  padding: 1rem;
`;

interface RecommendedSectionProps {
  recommendations: ContentItem[];
}

export const RecommendedSection: React.FC<RecommendedSectionProps> = ({
  recommendations,
}) => {
  return (
    <Background>
      <h1>Recommended For You</h1>
      <Grid>
        {recommendations.map((recommendation) => (
          <RecommendationCard recommendation={recommendation} />
        ))}
      </Grid>
    </Background>
  );
};
