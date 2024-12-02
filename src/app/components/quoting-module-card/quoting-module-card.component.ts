import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import * as quoteData from '../../../../data/models/quotes.json'

@Component({
  selector: 'quoting-module-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quoting-module-card.component.html',
  styleUrl: './quoting-module-card.component.scss'
})
export class QuotingModuleCardComponent {
  accountId: number = 0;
  filteredQuotes: any[] = [];
  activeQuote: string = "";
  dateQuoted: string = "";
  doclink: string = "";
  activeQuoteObject: any;

  faketa =  {
    "accountId": 49,
    "quoteId": 1,
    "revisionName": "FINAL Quote",
    "dateQuoted": "2024-11-15",
    "doclink": "http://localhost:4200/account/1/quote/final.pdf",
    "options": ["Item","Option 1"],
    "perLimit": ["Per Limit","$2,000,000"],
    "totalLimit": ["Total Limit 1","Option 1"],
    "sirOne": ["SIR 1","$2,000,000"],
    "sirTwo": ["SIR 2","$25,000"],
    "sirThree": ["SIR 3","$0"],
    "termOne": ["Term 1","3"],
    "termTwo": ["Term 2","0"],
    "termOnePremiumOne": ["T1/Premium 1","$16,250"],
    "termOnePremiumTwo": ["T1/Premium 2","$0"],
    "termOnePremiumThree": ["T1/Premium 3","$0"],
    "termTwoPremiumOne": ["T2/Premium 1","$0"],
    "termTwoPremiumTwo": ["T2/Premium 2","$0"],
    "termTwoPremiumThree": ["T2/Premium 3","$0"]
}

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
    console.log(this.filteredQuotes.length)
    if(this.filteredQuotes.length > 0 ){
      this.activeQuote = this.filteredQuotes[0].revisionName
      this.setActiveQuote(this.filteredQuotes[0].revisionName,this.filteredQuotes[0].dateQuoted,this.filteredQuotes[0])
    }else{
      this.activeQuote = this.faketa.revisionName
      this.setActiveQuote(this.faketa.revisionName,this.faketa.dateQuoted,this.faketa.revisionName)
    }

  }

  getQuotesByAccountId(accountId: number) {
    this.filteredQuotes = quoteData.quotes.filter(quote => quote.accountId === accountId);
  }
}
