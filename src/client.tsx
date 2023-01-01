import { h, ComponentType, hydrate } from "preact";
import { Context } from "craq";

import Wrapper from "./Wrapper";

const renderer = <S extends unknown, A extends unknown>(
  context: Context<S, A>,
  App: ComponentType<{ context: Context<S, A> }>,
  { node }: { node: HTMLElement }
) =>
  hydrate(
    <Wrapper context={context}>
      <App context={context} />
    </Wrapper>,
    node
  );

export default renderer;
