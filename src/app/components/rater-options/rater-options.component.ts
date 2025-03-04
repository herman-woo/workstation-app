import { Component } from '@angular/core';
import { RaterService } from '../../../services/rater.service';
import { ActivatedRoute } from '@angular/router';
import { RaterReferencesService } from '../../../services/rater-references.service';
import { CommonModule } from '@angular/common';
import { FormatNumberPipe } from './pipe';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule for ngModel


@Component({
  selector: 'app-rater-options',
  standalone: true,
  imports: [CommonModule, FormatNumberPipe, FormsModule],
  templateUrl: './rater-options.component.html',
  styleUrl: './rater-options.component.scss'
})
export class RaterOptionsComponent {
  id: string | null = null;
  rater: any;

  //Component Information for New options
  perLimit: number = 1000000;
  totalLimit: number = 1000000;
  sir: number = 25000;
  terms: number = 1;
  totalPremium: number | undefined = 0;

  constructor(private route: ActivatedRoute,
    private raterService: RaterService,
    private raterRefService: RaterReferencesService
  ) {}

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id');
    this.id = this.route.pathFromRoot[1].snapshot.url[1].path

    this.rater = this.raterService.getRaterData();
    this.raterService.accountRater$.subscribe((data) => {
      this.rater = data
      this.totalPremium = this.rater.final_premium! * this.perLimit/1000000 * this.totalLimit/1000000 * 25000/this.sir
    })

    console.log("Retrieved Options Data:", this.rater)
  }
  copyValues(item: any){
    this.perLimit = item.per_limit
    this.totalLimit = item.total_limit
    this.sir = item.retention
    this.terms = item.terms
    // this.totalPremium = this.getTotalPremium()
    return item
  }
  addNewOption(): void {
    if (!this.rater) return;
    this.raterService.addOption(
      this.rater.id,
      this.perLimit,
      this.totalLimit,
      this.sir,
      this.terms,
      this.totalPremium,
    ).subscribe({
      next: (createdItem) => {
        // this.cart?.items.push(createdItem); // ✅ Add new item to cart list
        // this.newItem = null; // ✅ Reset the input row
        // this.addingItem = false;
        this.perLimit = 0
        this.totalLimit = 0
        this.sir = 0
        this.terms = 0
        this.totalPremium = 0
        window.location.reload()
      },
      error: (error) => {
        // this.errorMessage = error.message;
        // this.addingItem = false;
      }
    });
  }
  removeOption(itemId: number | undefined): void {
    if (!this.rater || itemId === undefined) {
      console.error('Remove Item Failed: itemId is undefined or cart is null');
      return;
    }

    console.log(`Removing item with ID: ${itemId}`);

    this.raterService.deleteOptionItem(parseInt(this.id!),itemId).subscribe({
      next: () => {
        console.log(`Item ${itemId} removed successfully from backend`);
        // this.cart!.items = this.cart!.items.filter(item => item.id !== itemId);
        window.location.reload(); // ✅ Force reload after deletion
      },
      error: (error) => {
        console.error('Error removing item:', error);
        // this.errorMessage = error.message;
      }
    });

  }

  getTotalPremium(){
    return this.rater!.final_premium! * this.perLimit/1000000 * this.totalLimit/1000000 * 25000/this.sir
  }
  updateTotalPremium(){
    this.totalPremium = this.getTotalPremium()
  }
  increaseTerms(amount: number){
    this.terms += amount
    this.updateTotalPremium()
  }
  increaseRetention25k(amount: number){
    this.sir += amount
    this.updateTotalPremium()
  }
  increaseTotalLimit(amount: number){
    this.totalLimit += amount
    this.updateTotalPremium()
  }
  increasePerLimit(amount: number){
    this.perLimit += amount
    this.updateTotalPremium()
  }
}
