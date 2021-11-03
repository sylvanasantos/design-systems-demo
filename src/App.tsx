import "focus-visible";
import styled from "@emotion/styled";
import React from "react";
import { intermediateCourses, recommendedCourses } from "./dummyData";
import { CurriculumCardGrid } from "./components/CurriculumCardGrid";

const AppContainer = styled.div`
  background-color: #fff0e5;
  padding: 2rem;
  display: grid;
  row-gap: 1.5rem;
`;

function App() {
  return (
    <AppContainer>
      <CurriculumCardGrid
        sectionTitle="Recommended For You"
        items={recommendedCourses}
      />
      <CurriculumCardGrid
        sectionTitle="Intermediate Courses"
        items={intermediateCourses}
      />
    </AppContainer>
  );
}

export default App;
