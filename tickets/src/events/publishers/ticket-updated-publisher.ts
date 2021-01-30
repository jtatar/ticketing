import { Publisher, Subjects, TicketUpdatedEvent } from '@jtattickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
