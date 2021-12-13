import type { FC } from "react";

import { CONTACT_LIST } from "lib/consts";

import { ContactIconLink } from "../ContactIconLink";

/**
 * Component ContactIconLinksGroup's props.
 */
export interface IContactIconLinksGroup {}

/**
 * Component ContactIconLinksGroup is used to show all my contact link.
 * It primarily used in the footer and mobile side nav.
 */
export const ContactIconLinksGroup: FC<IContactIconLinksGroup> = () => {
  return (
    <>
      {CONTACT_LIST.map((contact, idx) => (
        <ContactIconLink key={idx} {...contact} />
      ))}
    </>
  );
};
