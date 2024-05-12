import { ChangeDetectionStrategy, Component, OnInit, afterNextRender } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Globals } from '@src/app/shared/globals';
import { DataService } from '@src/app/services/data-service.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../services/commonservice';
import moment from 'moment';
@Component({
  selector: 'app-doctor-profile-settings',
  templateUrl: './doctor-profile-settings.component.html',
  styleUrl: './doctor-profile-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DoctorProfileSettingsComponent implements OnInit {

  formData: any = {
    profileImage:{src:''},
    id:'',
    username:'',
    email:'',
    firstName:'',
    lastName:'',
    phoneNo:'',
    gender:'',
    dob:'',
    biography:'',
    clinicName:'',
    clinicAddress:'',
    clinicImages:[],
    education:[],
    experience:[],
    awards:[],
    memberships:[],
    registrations:[]
  }
  isLoading: boolean;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  isDragOver: boolean;

  constructor(private router: Router, private dataService: DataService, private toastr: ToastrService, private commonservice: CommonService) {
    afterNextRender(() => {

      const storedData = localStorage.getItem('user');
      if (storedData && storedData != null) {
        try {
          this.formData['id'] = JSON.parse(storedData)['id'];
          this.formData['username'] = JSON.parse(storedData)['name'];
          this.formData['email'] = JSON.parse(storedData)['email'];

        }
        catch (err) {
        }
      }
    });
  }

  ngOnInit(): void {

   



  };

  onFileSelected(event, type) {

    if (type == 'doctorprofile') {
      let selectedImage = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        let imageBase64 = reader.result as string;

        this.formData['profileImage'] = {
          src: imageBase64
        }


      };
      reader.readAsDataURL(selectedImage);
    } else if (type == 'clinicImages') {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement.files) {
        // this.handleFiles(inputElement.files);
        let files = inputElement.files
        for (let i = 0; i < files.length; i++) {
          const file = files.item(i);
          if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
              const imageUrl = reader.result as string;
              console.info(imageUrl)
              // Display the image, you can add it to an array of images, or emit an event to the parent component
            };
            reader.readAsDataURL(file);
          }
        }
      }
    }




  }


  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
    // Add styles or effects to indicate drag over
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    // Remove styles or effects applied during dragover
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    this.handleFiles(event.dataTransfer.files);
    // Remove styles or effects applied during dragover
  }

  handleFiles(files: FileList) {
    console.info('herre')
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (file && file.type.startsWith('image/')) {
        this.displayImage(file);
      }
    }
  }
  displayImage(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      //  const imageUrl = reader.result as string;
      const imageUrl = reader.result as string;
      this.formData['clinicImages'].push({ src: imageUrl })
      // Display the image, you can add it to an array of images, or emit an event to the parent component
    };
    reader.readAsDataURL(file);
  }
  uploadOneAtTime(fileNo, images, type, allData = {}) {

    let imagePayload
    imagePayload = {
      "image_type": type,
      "entity_id": this.formData.id,
      image: images[fileNo].src
    }



    this.dataService.callApi(imagePayload, 'upload-image').pipe(takeUntil(this.destroyed$)).subscribe(response => {

      if (response.success) {
        fileNo++;
        // const currentFile = fileNo - 1;
        // //console.info(fileNo < images.length, fileNo, images.length)
        if (fileNo < images.length) {
          this.uploadOneAtTime(fileNo, images, type, allData)
        }
        else {

          // this.router.navigateByUrl('/product');
        }
      }
      else {
        this.uploadOneAtTime(fileNo, images, type)
        //this.toastr.error(('ERR_AT_PRODUCT_IMAGES_UPLOAD'));

      }


    });
  }
  isBase64(value) {
    try {
      return btoa(atob(value)) === value;
    } catch (e) {
      return false;
    }
  }
  submitForm() {
    let requestPayload = JSON.parse(JSON.stringify(this.formData))
    delete requestPayload['profileImage']
    delete requestPayload['clinicImages']
  
    this.dataService.callApi(requestPayload, 'profile/save', true)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (data: any) => {
          this.isLoading = false;

          if (data.success) {
           
            
              if (this.formData['profileImage']) {
                let isValid = this.isBase64(this.formData['profileImage'].src.split(',')[1])
                if (isValid) {
                  this.uploadOneAtTime(0, this.formData['profileImage'], 'profileImage')
                }
              }
              if (this.formData['clinicImages']) {
                let tempArray = [];
                this.formData['clinicImages'].map(item => {

                  let isValid = this.isBase64(item.src.split(',')[1])
                  if (isValid) {
                    tempArray.push(item)

                  }
                })
                if (tempArray.length > 0) {
                  this.uploadOneAtTime(0, this.formData['tempArray'], 'clinicImages')

                }
               
              }
              this.toastr.success('Updated Successfully!');


          


          } else {
            this.toastr.error('Error in update ,try again!');
          }
        },
        (error: any) => {
          const errorDetails = error.error;
          this.isLoading = false
          //  console.error('API Error:', error,errorDetails.message);
          this.toastr.error(errorDetails.message);

        }
      );






  }


}