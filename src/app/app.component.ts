import { Component } from '@angular/core';
import { Car } from './domain/car';
import { SelectItem } from 'primeng/api';
import {MessageService} from 'primeng/api';
import { DialogService } from 'primeng';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
   providers: [MessageService, DialogService]
})
export class AppComponent  {
  name = 'Angular';
  value = new Date();

  cars: Car[]=[
        {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
        {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
        {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
        {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
        {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
        {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
        {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
        {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
    ];

  brands: SelectItem[];

  clonedCars: { [s: string]: Car; } = {};

  constructor(private messageService: MessageService, private dialogService: DialogService) { }

  ngOnInit() {
      this.brands = [
          {label: 'Audi', value: 'Audi'},
          {label: 'BMW', value: 'BMW'},
          {label: 'Fiat', value: 'Fiat'},
          {label: 'Ford', value: 'Ford'},
          {label: 'Honda', value: 'Honda'},
          {label: 'Jaguar', value: 'Jaguar'},
          {label: 'Mercedes', value: 'Mercedes'},
          {label: 'Renault', value: 'Renault'},
          {label: 'VW', value: 'VW'},
          {label: 'Volvo', value: 'Volvo'}
      ];
  }

  onRowEditInit(car: Car) {
      this.clonedCars[car.vin] = {...car};
  }

  onRowEditSave(car: Car) {
      if (car.year > 0) {
          delete this.clonedCars[car.vin];
          this.messageService.add({severity:'success', summary: 'Success', detail:'Car is updated'});
      }  
      else {
          this.messageService.add({severity:'error', summary: 'Error', detail:'Year is required'});
      }
  }

  onRowEditCancel(car: Car, index: number) {
      
  }
}
