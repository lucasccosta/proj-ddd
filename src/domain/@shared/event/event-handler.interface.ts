import EventInterface from "./event.interface";

export default interface EventHandlerInterface<
  // evento do tipo "T" é um EventInterface e seu valor padrão é tipo EventInterface
  // logo esse evento deve implementar o EventInterface
  T extends EventInterface = EventInterface
> {
  handle(event: T): void;
}
