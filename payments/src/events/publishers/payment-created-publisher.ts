import { Subjects, Publisher, PaymentCreatedEvent } from '@jtattickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
