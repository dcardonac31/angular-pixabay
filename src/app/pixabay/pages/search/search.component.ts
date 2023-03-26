import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PixabayData } from '../../interfaces/pixabayResponse';
import { PixabayService } from '../../service/pixabay.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  pixabayData: PixabayData[] = []

  constructor(private pixabayService: PixabayService, private fb: FormBuilder) {
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
      },
      error: (error) => {
        this.pixabayData = [];
        console.log(error);
      }
    })
  }
}
