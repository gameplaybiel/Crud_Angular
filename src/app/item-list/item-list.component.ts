import { Component } from '@angular/core';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items: string[];

  constructor(private itemService: ItemService){
    //Aqui é para ler o (get) e criar o novo componente (Read)
    this.items = itemService.getItems();
  }

  addItem(item: string) :void{
    this.items.push(item);
  }

  updateItem(index: number, newItem: string): void{
    this.items[index] = newItem;
  }

  deleteItem(index: number): void{
    this.items.splice(index, 1);
  }

}
