import { Publisher, OrderCancelledEvent, Subjects } from '@jtattickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
