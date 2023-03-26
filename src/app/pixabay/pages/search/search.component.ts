import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Modal} from 'bootstrap';
import { ModalComponent } from 'src/app/shared/pages/modal/modal.component';
import { PixabayData } from '../../interfaces/pixabayResponse';
import { PixabayService } from '../../service/pixabay.service';
import { AppSettings } from 'appsettings-json-reader';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var window:any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  pixabayData: PixabayData[] = [];
  warningMessage: string = "";

  constructor(private pixabayService: PixabayService, private fb: FormBuilder, private elRef: ElementRef) {
    this.searchForm = this.fb.group({
      searchTerm: [""]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const searchTerm = this.searchForm.value.searchTerm;
    this.getAllImagesOthers(searchTerm);
  }

  getAllImagesOthers(searchTerm: string) {
    this.pixabayService.getAllImages(searchTerm).subscribe({
      next: (response) => {
        this.pixabayData = response.hits;
        if(this.pixabayData.length == 0){
          this.warningMessage = AppSettings.readAppSettings().errors.queryNotFound
          this.showModal()
        }
      },
      error: (error) => {
        this.pixabayData = [];
        this.warningMessage = AppSettings.readAppSettings().errors.queryError +" " +error.error
        this.showModal()
      }
    })
  }

  showModal() {
    const modalRef = this.elRef.nativeElement.querySelector('#modalWarning');;
    const modal=new Modal(modalRef);
    modal.show();
  }
}
