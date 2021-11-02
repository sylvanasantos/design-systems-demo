import React from "react";
import { RecommendedSection } from "./components/RecommendedSection";
import { recommendedCourses } from "./dummyData";

function App() {
  return (
    <div>
      <RecommendedSection courses={recommendedCourses} />
    </div>
  );
}

export default App;
