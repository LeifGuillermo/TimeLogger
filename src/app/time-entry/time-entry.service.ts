import { BehaviorSubject, ReplaySubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeEntryService {
  private currentTicketBehaviorSubject$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  private ticketStateReplaySubject$: ReplaySubject<TimeEntryTicketState | any[]> = new ReplaySubject<TimeEntryTicketState>();
  private ticketStateLatest$: BehaviorSubject<TimeEntryTicketState | any[]> = new BehaviorSubject<TimeEntryTicketState>(null);

  public ticketState$: Observable<TimeEntryTicketState | any[]> = this.ticketStateReplaySubject$.asObservable();

  public currentTicketState$: Observable<TimeEntryTicketState | any[]> = this.ticketStateLatest$.asObservable();

  // The current ticket is the ticket that has its number in the Ticket Number field.
  public currentTicket: TicketTimeEntry;

  constructor() {}

  private updateCurrentTicketNumber(ticketNumber: string): void {
    this.currentTicketBehaviorSubject$.next(ticketNumber);
  }

  public getCurrentTicketNumber(): string {
    return this.currentTicketBehaviorSubject$.value;
  }

  public isCurrentTicketStartTime(ticketNumber: string): boolean {
    if (this.ticketStateLatest$.value && this.ticketStateLatest$.value[ticketNumber]) {
      console.log(this.ticketStateLatest$.value);
      return this.ticketStateLatest$.value[ticketNumber].isStartTime;
    }
    return false;
  }

  public getCurrentTicket(): TicketTimeEntry {
    return this.currentTicket ? this.currentTicket : null;
  }

  public updateTicketState(ticket: TicketTimeEntry): void {
    if (ticket && ticket.ticketNumber) {
      this.currentTicket = ticket;
      ticket.isStartTime = !ticket.isStartTime;
      const updatedState = this.ticketStateLatest$ && this.ticketStateLatest$.value ? this.ticketStateLatest$.value : [];
      updatedState[ticket.ticketNumber] = ticket;
      this.ticketStateReplaySubject$.next(updatedState);
      this.ticketStateLatest$.next(updatedState);
      this.updateCurrentTicketNumber(ticket.ticketNumber);
    }
  }
}

export interface TimeEntryTicketState {
  [ticketNumber: string]: TicketTimeEntry;
}

export interface TicketTimeEntry {
  ticketNumber: string;
  isStartTime: boolean;
  updateTime: Date;
  timeLengthMinutes?: number;
  comments?: string;
}
