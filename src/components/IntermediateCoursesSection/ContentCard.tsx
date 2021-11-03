import styled from "@emotion/styled";
import React from "react";
import { ContentItem } from "./types";

const CardContainer = styled.button`
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  border: 2px solid black;
  padding: 1rem 2rem;
  width: 32rem;
  margin-left: 2rem;
  text-align: start;

  h5 {
    margin-bottom: 0.25rem;
  }
  h3 {
    margin-top: 0.15rem;
    margin-bottom: 0.15rem;
  }
  h4 {
    margin-top: 0.5rem;
  }

  &:focus-visible {
    outline: none;
    border: 2px solid blueviolet;
  }
`;

export interface ContentCardProps {
  course: ContentItem;
}

export const ContentCard: React.FC<ContentCardProps> = ({ course }) => {
  const { title, type, lessons } = course;

  return (
    <CardContainer>
      <h5>{type}</h5>
      <h3>{title}</h3>
      <h4>{lessons} Lessons</h4>
    </CardContainer>
  );
};
