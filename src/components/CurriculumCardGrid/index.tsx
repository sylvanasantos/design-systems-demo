import React from "react";
import {
  Anchor,
  Column,
  ContentContainer,
  LayoutGrid,
  Text,
} from "@codecademy/gamut";
import { CurriculumCard } from "@codecademy/gamut-labs";
import { ContentItem } from "./types";

interface CurriculumCardGridProps {
  sectionTitle: string;
  items: ContentItem[];
}

export const CurriculumCardGrid: React.FC<CurriculumCardGridProps> = ({
  sectionTitle,
  items,
}) => {
  return (
    <ContentContainer>
      <Text as="h2" variant="title-xl">
        {sectionTitle}
      </Text>
      <LayoutGrid rowGap={32} columnGap={{ _: 16, sm: 32 }}>
        {items.map((item) => {
          const { title, type, lessons } = item;
          const scope = {
            Lesson: lessons,
          };
          return (
            <Column size={{ _: 12, sm: 6, md: 4 }}>
              <Anchor variant="interface" href="">
                <CurriculumCard
                  title={title}
                  text={type}
                  scope={scope}
                  difficulty={1}
                  showAltSubtitle
                />
              </Anchor>
            </Column>
          );
        })}
      </LayoutGrid>
    </ContentContainer>
  );
};
