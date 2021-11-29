import type { FC } from "react";

import { ContactIconLink } from "../ContactIconLink";
import { CONTACT_LIST } from "lib/consts";

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
