import React from "react";
import { ContentItem } from "./types";

export interface RecommendationCardProps {
  recommendation: ContentItem;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  recommendation,
}) => {
  const { title, type, lessons } = recommendation;

  return (
    <div>
      <h4>{type}</h4>
      <h2>{title}</h2>
      <h4>{lessons} Lessons</h4>
    </div>
  );
};
