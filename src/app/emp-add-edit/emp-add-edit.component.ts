
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {

  empForm !: FormGroup

  constructor(private _fb: FormBuilder,
    private empService: EmployeeService,
    private dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private coreService: CoreService

  ) {

    this.empForm = this._fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      dob: [''],
      gender: [''],
      education: [''],
      company: [''],
      experience: [''],
      package: ['']
    })
  }

  public education: string[] = [
    'Matric',
    'Intermediate',
    'Diploma',
    'Graduate',
    'Post Graduate'
  ]

  ngOnInit(): void {
    this.empForm.patchValue(this.data)
  }


  OnSubmitForm() {
    if (this.empForm.valid) {
      if (this.data) {
        this.empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
          next: (val: any) => {
            this.coreService.openSnackBar('Employee Updated Successfully', 'done')
            this.dialogRef.close(true);

          },
          error: (err: any) => {
            console.error(err);
          }
        }
        )
      }

      else {
        this.empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this.coreService.openSnackBar('Employee Added Successfully', 'done')
            this.dialogRef.close(true);

          },
          error: (err: any) => {
            console.error(err);
          }
        }
        )
      }



    }

  }



}