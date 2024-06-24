// Polymorphic component

import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type PropsWithChildren,
} from "react";

type ContainerType<T extends ElementType> = PropsWithChildren<{ as?: T }> &
  ComponentPropsWithoutRef<T>;


export default function Container<K extends ElementType>({
  as,
  children,
  ...props
}: ContainerType<K>) {
  const Component = as || "div";

  return <Component {...props}> {children} </Component>;
}
