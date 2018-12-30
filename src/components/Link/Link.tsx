import React from 'react';
import classnames from 'classnames';
import { LinkGetProps, Link as RouterLink } from '@reach/router';

import styles from './styles.module.scss';

export type LinkProps = {
  to: string,
  children: any,
  replace?: boolean,
  ref?: () => string,
  innerRef?: () => string,
  state?: {[key: string]: any},
  title?: string,
  id?: string,
  className?: string,
};

const isActive = ({ isCurrent }: LinkGetProps, className?: string) => {
  return isCurrent
    ? { className: classnames(styles.link, styles.activeLink, className) }
    : {};
};

export default function Link(props: LinkProps) {
  const className = props.className;
  return (
    <RouterLink
      {...props}
      getProps={linkProps => isActive(linkProps, className)}
      className={classnames(styles.link, className)}
    />
  );
}
