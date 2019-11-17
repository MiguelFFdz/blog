import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CollectionService } from '../services/collection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.component.html',
  styleUrls: ['./contactar.component.css']
})

export class ContactarComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  // siteKey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; // key for dev
  siteKey = '6LdZWMEUAAAAAIIzzK3XgR9cEjvMunb6jlFhobea';
  useGlobalDomain = 'false';
  size = 'Normal';
  lang = 'es';
  theme = 'Light';
  type = 'Image';

  constructor(private titleService: Title, private fb: FormBuilder,
              private collectionService: CollectionService, private router: Router) {
    this.createForm();
    this.titleService.setTitle('Contactar');
  }

  ngOnInit() {
    this.contactForm.reset();

  }
  // getter for easy access to form fields from view
  get form() {
    return this.contactForm.controls;
  }

  createForm() {
    this.contactForm = this.fb.group({
      contactFormName: ['', Validators.required],
      contactFormEmail: ['', [Validators.required, Validators.email]],
      contactFormSubject: ['', Validators.required],
      contactFormMessage: ['', Validators.required],
      recaptcha: ['', Validators.required]
      // contactFormCheck: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    // display form values on success CAMBIAR POR MODAL
    this.collectionService.addItems('messages', this.contactForm.value);
    this.router.navigateByUrl('/contactar', { skipLocationChange: true }).then(() => {
      this.router.navigate(['contactar']);
    });
  }

  handleReset() {
  }

  handleLoad() {
  }

  handleSuccess($event) {
  }

  handleExpire() {
  }

}
