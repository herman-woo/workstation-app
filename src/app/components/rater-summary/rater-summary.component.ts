import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,RouterLink,Router,RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RaterService } from '../../../services/rater.service';
import { Rater, Exposure, Modifier } from '../../../models/rater.model';
import { RaterReferencesService } from '../../../services/rater-references.service';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rater-summary',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule,RouterLink], // ✅ Add FormsModule
  templateUrl: './rater-summary.component.html',
  styleUrl: './rater-summary.component.scss'
})
export class RaterSummaryComponent {
  // @Input() rater: Rater;
  rater: Rater;
  id: string | null = null;
  loading: boolean = true;
  errorMessage: string | null = null;

  //State Items for Creating Exposures
  newItem: Exposure | null = null;
  naicsCodes: { code: string, description: string, premium: number }[] = [];
  selectedNaics: { code: string, description: string, premium: number } | null = null;
  addingItem: boolean = false;

  //State Items for Creating Modifiers
  newMod: Modifier | null = null;
  selectedMod: { code: string, type: string, description: string, factor: number } | null = null;
  modItem: { code: string, type: string, description: string, factor: number }[] = [];
  addingMod: boolean = false;


  constructor(private route: ActivatedRoute,
    private raterService: RaterService,
    private raterRefService: RaterReferencesService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    // this.id = this.route.snapshot.url;
    this.id = this.route.pathFromRoot[1].snapshot.url[1].path

    this.loadRater()
    this.raterRefService.getNaicsCodes().subscribe(data => {
      this.naicsCodes = Object.entries(data).map(([key, value]) => ({
        code: key,
        description: value.description,
        premium: value.premium
      }));
    });

    this.raterRefService.getModifiers().subscribe(data => {
      this.modItem = Object.entries(data).map(([key, value]) => ({
        code: key,  // ✅ Keeping key as code
        type: value.type,  // ✅ Include type since it's in the API response
        description: value.description,
        factor: value.factor
      }));
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rater'] && changes['rater'].currentValue) {
      console.log("has data:", this.rater);
      this.loading = false;
    }
  }

  loadRater(): void {
    this.raterService.getRaterByAccountID(parseInt(this.id!)).subscribe({
      next: (data) => {
        console.log("Rater Data:", data)
        this.rater = data;
        this.loading = false;
        // this.options = this.cart.options
        // this.totalPremium = this.cart.final_premium! * this.perLimit/1000000 * this.totalLimit/1000000 * 25000/this.sir
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.loading = false;
      }
    });
  }

  //Formatting Getters for final numbers for the sumamry
  get formattedSubtotal(): string {
    return (this.rater?.subtotal_premium ?? 0).toFixed(2);
  }
  get formattedTaxes(): string {
    return (this.rater?.total_modifiers ?? 0).toFixed(2);
  }

  get formattedFinalTotal(): string {
    return (this.rater?.final_premium ?? 0).toFixed(2);
  }


  /*
  * Methods for creating Exposures
  */

  addNewItemRow(): void {
    if (!this.rater) return;

    this.newItem = {
      cart_id: this.rater.id,
      product_description: '',
      premium: 0,
      quantity: 1,
      naics_premium: 0,
      note: '',
      naics_code: 111,
      modifier: 100
    };
  }

  selectNaics(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedCode = target.value;
    this.selectedNaics = this.naicsCodes.find(item => item.code === selectedCode) || null;
    // console.log(this.selectedNaics)
  }
  // ✅ Submit the new item to FastAPI
  submitNewItem(): void {
    if (!this.rater || !this.newItem || this.addingItem) return;

    this.addingItem = true; // ✅ Prevent duplicate submissions
    this.newItem.naics_code = Number(this.selectedNaics?.code ?? 0);
    this.newItem.product_description = this.selectedNaics!.description;
    this.newItem.naics_premium = this.selectedNaics!.premium
    this.newItem.premium = (this.newItem.naics_premium * this.newItem.modifier / 100) * this.newItem.quantity

    this.raterService.addRaterItem(
      this.rater.id,
      this.newItem.product_description,
      this.newItem.premium,
      this.newItem.quantity,
      this.newItem.naics_premium,
      this.newItem.note,
      this.newItem.naics_code,
      this.newItem.modifier
    ).subscribe({
      next: (createdItem) => {
        this.rater?.items.push(createdItem); // ✅ Add new item to cart list
        this.newItem = null; // ✅ Reset the input row
        this.addingItem = false;
        window.location.reload()
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.addingItem = false;
      }
    });
  }

  removeItem(itemId: number | undefined): void {
    if (!this.rater || itemId === undefined) {
      console.error('Remove Item Failed: itemId is undefined or cart is null');
      return;
    }

    console.log(`Removing item with ID: ${itemId}`);

    this.raterService.deleteRaterItem(this.rater.id, itemId).subscribe({
      next: () => {
        console.log(`Item ${itemId} removed successfully from backend`);
        this.rater!.items = this.rater!.items.filter(item => item.id !== itemId);
        window.location.reload(); // ✅ Force reload after deletion
      },
      error: (error) => {
        console.error('Error removing item:', error);
        this.errorMessage = error.message;
      }
    });

  }


  /*
  * Methods for creating Modifiers
  */
  addNewModRow(): void {
    if (!this.rater) return;

    this.newMod = {
      cart_id: this.rater.id,
      description: '',
      note: '',
      factor: 1,
      type: ''
    };
  }

  selectMod(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedMod = target.value;
    this.selectedMod = this.modItem.find(item => item.code === selectedMod) || null;
    console.log(this.selectedMod)
  }

  submitNewMod(): void {
    if (!this.rater || !this.newMod || this.addingMod) return;
    console.log("stop this mess")
    this.addingMod = true; // ✅ Prevent duplicate submissions
    this.newMod.description = this.selectedMod!.description;
    this.newMod.factor = this.selectedMod!.factor;
    this.newMod.type = this.selectedMod!.type;
    this.raterService.addModItem(
      this.rater.id,
      this.newMod.description,
      this.newMod.factor,
      this.newMod.note,
      this.newMod.type
    ).subscribe({
      next: (createdItem) => {
        this.rater?.mods.push(createdItem); // ✅ Add new item to cart list
        this.newItem = null; // ✅ Reset the input row
        this.addingMod = false;
        window.location.reload()
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.addingMod = false;
      }
    });
  }

  removeMod(itemId: number | undefined): void {
    if (!this.rater || itemId === undefined) {
      console.error('Remove Item Failed: itemId is undefined or cart is null');
      return;
    }

    console.log(`Removing item with ID: ${itemId}`);

    this.raterService.deleteModItem(this.rater.id, itemId).subscribe({
      next: () => {
        console.log(`Item ${itemId} removed successfully from backend`);
        this.rater!.items = this.rater!.items.filter(item => item.id !== itemId);
        window.location.reload(); // ✅ Force reload after deletion
      },
      error: (error) => {
        console.error('Error removing item:', error);
        this.errorMessage = error.message;
      }
    });

  }
}
