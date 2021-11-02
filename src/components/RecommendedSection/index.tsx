import React from "react";
import { RecommendationCard } from "./RecommendationCard";
import { ContentItem } from "./types";

interface RecommendedSectionProps {
  courses: ContentItem[];
}

export const RecommendedSection: React.FC<RecommendedSectionProps> = ({
  courses,
}) => {
  return (
    <div>
      {courses.map((course) => (
        <RecommendationCard recommendation={course} />
      ))}
    </div>
  );
};
