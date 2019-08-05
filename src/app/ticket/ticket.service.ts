import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private ticketHistory: { ticketNumberHistory: TicketNumberHistory; ticketDateHistory: TicketDateHistory };

  constructor() {}

  public addTicketToHistory(ticket: Ticket, date: Date) {
    if (!this.ticketHistory) {
      this.ticketHistory = {
        ticketNumberHistory: [ticket.ticketNumber][date.toString()],
        ticketDateHistory: [date.toString()][ticket.ticketNumber]
      };
    }
    this.ticketHistory.ticketNumberHistory[ticket.ticketNumber][date.toString()].push(ticket);
    this.ticketHistory.ticketDateHistory[date.toString()][ticket.ticketNumber] = ticket;
  }
}

interface TicketNumberHistory {
  [ticketNumber: string]: { [dateString: string]: Ticket[] };
}

interface TicketDateHistory {
  [dateString: string]: { [ticketNumber: string]: Ticket };
}

export interface Ticket {
  ticketNumber: string;
  comments: string;
}
