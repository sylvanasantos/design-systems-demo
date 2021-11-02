import styled from "@emotion/styled";
import React from "react";
import { ContentItem } from "./types";

const CardContainer = styled.div`
  display: grid;
  background-color: white;
  color: black;
  font-family: "Courier New", Courier, monospace;
  border: 1px solid black;
  padding: 1rem;

  h2,
  h4 {
    margin: 0.5rem;
  }
`;

export interface RecommendationCardProps {
  recommendation: ContentItem;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  recommendation,
}) => {
  const { title, type, lessons } = recommendation;

  return (
    <CardContainer>
      <h4>{type}</h4>
      <h2>{title}</h2>
      <h4>{lessons} Lessons</h4>
    </CardContainer>
  );
};
