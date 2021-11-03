import styled from "@emotion/styled";
import React from "react";
import { RecommendationCard } from "./RecommendationCard";
import { ContentItem } from "./types";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;
  padding: 1rem;

  @media only screen and (max-width: 840px) {
    grid-template-columns: 1fr;
  }
`;

interface RecommendedSectionProps {
  recommendations: ContentItem[];
}

export const RecommendedSection: React.FC<RecommendedSectionProps> = ({
  recommendations,
}) => {
  return (
    <>
      <h1>Recommended For You</h1>
      <Grid>
        {recommendations.map((recommendation) => (
          <RecommendationCard recommendation={recommendation} />
        ))}
      </Grid>
    </>
  );
};
