import {Component, OnInit} from '@angular/core';

@Component({

    selector: 'sa-review-form',
    templateUrl: './review-form.component.html',
})
export class ReviewFormComponent implements OnInit {
    public validationOptions: any = {
        // Rules for form validation
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            review: {
                required: true,
                minlength: 20
            },
            quality: {
                required: true
            },
            reliability: {
                required: true
            },
            overall: {
                required: true
            }
        },

        // Messages for form validation
        messages: {
            name: {
                required: 'Please enter your name'
            },
            email: {
                required: 'Please enter your email address',
                email: '<i class="fa fa-warning"></i><strong>Please enter a VALID email addres</strong>'
            },
            review: {
                required: 'Please enter your review'
            },
            quality: {
                required: 'Please rate quality of the product'
            },
            reliability: {
                required: 'Please rate reliability of the product'
            },
            overall: {
                required: 'Please rate the product'
            }
        },
        submitHandler: this.onSubmit

    };

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log('\n', 'submit handler for validated form', '\n\n')
    }

}
