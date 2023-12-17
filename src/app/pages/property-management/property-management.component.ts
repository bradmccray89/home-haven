import { PropertyDialogComponent } from '../../components/property-dialog/property-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Storage, ref, listAll, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  styleUrls: ['./property-management.component.scss'],
})
export class PropertyManagementComponent implements OnInit {
  propertyList: any[] = [];

  constructor(private storage: Storage) {}

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
}
