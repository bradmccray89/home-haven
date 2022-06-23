import { PropertyDialogComponent } from './../../components/property-dialog/property-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Storage, ref, listAll, getDownloadURL } from '@angular/fire/storage';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent implements OnInit {
  propertyList: any[] = [];

  constructor(private storage: Storage, private dialog: MatDialog) {}

  ngOnInit(): void {
    const list = ref(this.storage, 'home-images');
    listAll(list).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url: string) => {
          const propertyItem = {
            imageUrl: url,
            imageName: item.name,
          };
          this.propertyList.push(propertyItem);
        });
      });
    });
  }

  openDialog() {
    this.dialog.open(PropertyDialogComponent);
  }
}
