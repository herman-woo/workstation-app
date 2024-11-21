import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import * as quoteData from '../../../../../data/models/quotes.json'

@Component({
  selector: 'quoting-module-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quoting-module-card.component.html',
  styleUrl: './quoting-module-card.component.css'
})
export class QuotingModuleCardComponent {
  accountId: number = 0;
  filteredQuotes: any[] = [];
  activeQuote: string = "";
  dateQuoted: string = "";
  doclink: string = "";
  activeQuoteObject: any;


  setActiveQuote(quoteName: string, quoteDate: string, quoteObject: any) {
    this.activeQuote = quoteName;
    this.dateQuoted = quoteDate;
    this.activeQuoteObject = quoteObject;
    this.doclink = this.activeQuoteObject.doclink
  }


  // accountQuote: any;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.accountId = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.getQuotesByAccountId(this.accountId); // Example to get quotes with accountId 1
    this.activeQuote = this.filteredQuotes[0].revisionName
    this.setActiveQuote(this.filteredQuotes[0].revisionName,this.filteredQuotes[0].dateQuoted,this.filteredQuotes[0])
  }

  getQuotesByAccountId(accountId: number) {
    this.filteredQuotes = quoteData.quotes.filter(quote => quote.accountId === accountId);
  }
}
