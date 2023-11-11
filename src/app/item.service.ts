import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  getItems(): string[] {
    return this.items;
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

  constructor() { }
}
