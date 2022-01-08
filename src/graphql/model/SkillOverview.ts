/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SkillOverview
// ====================================================

export interface SkillOverview_illustrationImage {
  __typename: "Asset";
  /**
   * Get the url for the asset with provided transformations applied.
   */
  url: string;
}

export interface SkillOverview_imageBackgroundColor {
  __typename: "Color";
  hex: any;
}

export interface SkillOverview {
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
  illustrationImage: SkillOverview_illustrationImage;
  imageBackgroundColor: SkillOverview_imageBackgroundColor | null;
}
