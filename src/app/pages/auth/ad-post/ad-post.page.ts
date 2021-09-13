import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-post',
  templateUrl: './ad-post.page.html',
  styleUrls: ['./ad-post.page.scss'],
})
export class AdPostPage implements OnInit {

  postForm: FormGroup;
  @Input() imageUrl: string;
  @Input() videoUrl: string;
  image = '';
  video = '';
  fileName = '';

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
        image: [null, Validators.required],
        video: [null, Validators.required],
        adText: ['', Validators.required],
        link: ['', Validators.required]
    });
}

onSubmit() {
    console.log(this.postForm.value);
    this.router.navigate(['/ad-audience']);
}

detectImage(event) {
  const imageName = event.target.files[0];
  if (imageName) {
      this.image = imageName.name;
  }
  console.log(this.imageUrl);
}

detectVideo(event) {
  const videoName = event.target.files[0];
  if (videoName) {
      this.video = videoName.name;
  }
}

onFileSelected(event) {

  const file: File = event.target.files[0];

  if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      // formData.append("thumbnail", file);

      // const upload$ = this.http.post("/api/thumbnail-upload", formData);

      // upload$.subscribe();
  }
}

}
