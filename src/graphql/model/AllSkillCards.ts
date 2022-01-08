/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllSkillCards
// ====================================================

export interface AllSkillCards_skillCards_illustrationImage {
  __typename: "Asset";
  /**
   * Get the url for the asset with provided transformations applied.
   */
  url: string;
}

export interface AllSkillCards_skillCards_imageBackgroundColor {
  __typename: "Color";
  hex: any;
}

export interface AllSkillCards_skillCards {
  __typename: "SkillCard";
  /**
   * The unique identifier
   */
  id: string;
  name: string;
  /**
   * Skill's description sentences.
   */
  description: string;
  /**
   * An illustration image that presents my skill. As I write this description, the image looks like 3D Icons.
   */
  illustrationImage: AllSkillCards_skillCards_illustrationImage;
  imageBackgroundColor: AllSkillCards_skillCards_imageBackgroundColor | null;
}

export interface AllSkillCards {
  /**
   * Retrieve multiple skillCards
   */
  skillCards: AllSkillCards_skillCards[];
}
