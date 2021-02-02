import { Publisher, OrderCreatedEvent, Subjects } from '@jtattickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
