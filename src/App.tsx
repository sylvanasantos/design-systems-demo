import React from "react";
import { IntermediateCoursesSection } from "./components/IntermediateCoursesSection";
import { RecommendedSection } from "./components/RecommendedSection";
import { intermediateCourses, recommendedCourses } from "./dummyData";

function App() {
  return (
    <div>
      <RecommendedSection recommendations={recommendedCourses} />
      <IntermediateCoursesSection courses={intermediateCourses} />
    </div>
  );
}

export default App;
