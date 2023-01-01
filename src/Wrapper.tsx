import { RouterProvider } from "router6-preact";
import { h, ComponentChildren } from "preact";
import { Context } from "craq";

import { ComponentContextProvider } from "./context";

const Wrapper = <S extends unknown, A extends unknown>({
  context,
  children,
}: {
  context: Context<S, A>;
  children: ComponentChildren;
}) => (
  <RouterProvider router={context.router}>
    <ComponentContextProvider value={context.componentContext}>
      {children}
    </ComponentContextProvider>
  </RouterProvider>
);

export default Wrapper;
