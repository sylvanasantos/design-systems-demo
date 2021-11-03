import "focus-visible";
import styled from "@emotion/styled";
import React from "react";
import { IntermediateCoursesSection } from "./components/IntermediateCoursesSection";
import { RecommendedSection } from "./components/RecommendedSection";
import { intermediateCourses, recommendedCourses } from "./dummyData";

const AppContainer = styled.div`
  background-color: #fff0e5;
  padding: 2rem;
  display: grid;
  row-gap: 1.5rem;
`;

function App() {
  return (
    <AppContainer>
      <RecommendedSection recommendations={recommendedCourses} />
      <IntermediateCoursesSection courses={intermediateCourses} />
    </AppContainer>
  );
}

export default App;
