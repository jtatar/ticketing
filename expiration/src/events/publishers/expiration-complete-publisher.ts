import {
  Publisher,
  ExpirationCompleteEvent,
  Subjects,
} from '@jtattickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
