import { createContext } from "preact";
import { ComponentContext } from "craq";

const context = createContext<ComponentContext<{}>>(null);

const ComponentContextProvider = context.Provider;

export { ComponentContextProvider };

export default context;
