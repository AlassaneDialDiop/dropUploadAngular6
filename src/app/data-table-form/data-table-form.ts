import { Component, ViewChild } from '@angular/core';
import { DataTable, DataTableResource } from '../data-table';
import { DataService } from '../data.service';


@Component({
  selector: 'data-table-form',
  templateUrl: './data-table-form.html',
  styleUrls: ['./data-table-form.scss']
})
export class DataTableForm {

    carResource = new DataTableResource([]);
    cars = [];
    carCount = 0;

    editable = false;

    @ViewChild(DataTable) carsTable: DataTable;

    constructor(private dataService: DataService) {
        this.rowColors = this.rowColors.bind(this);
        this.carResource.count().then(count => this.carCount = count);
    }

    reloadCars(params) {
        this.carResource.query(params).then(cars => this.cars = cars);
    }

    carClicked(car) {
        alert(car.clicked);
    }

    yearLimit = 1999;

    rowColors(car) {
        if (car.year >= this.yearLimit) return 'rgb(255, 255, 197)';
    }
    
    updateTable(){
        this.cars = this.dataService.data;
        this.carResource = new DataTableResource(this.cars);
        this.rowColors = this.rowColors.bind(this);

        this.carResource.count().then(count => this.carCount = count);
    }

    toggleEdit(){
        this.editable = !this.editable;
    }
    print(){
        console.log('Print');
        console.log(this.cars);
    }
    onValueUpdate(e: any, rowNumber: string, colName: string){
        console.log(rowNumber);
        console.log(colName);
        console.log(this.cars[rowNumber]);
        this.cars[rowNumber][colName] = e.target.value;
        console.log( e.target.value);
    }
    deleteRow(row: any){
        console.log('deleting ', row.row);
        
        const index = this.cars.indexOf(row, 0);
        if (index > -1) {
            this.cars.splice(index, 1);
        }
    }
}
