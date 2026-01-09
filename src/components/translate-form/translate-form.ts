import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { TranslateOptions } from "../translate-options/translate-options";
import { TextOptions } from "../text-options/text-options";

@Component({
  selector: 'translate-form',
  standalone: true,               
  imports: [ReactiveFormsModule, TranslateOptions, TextOptions], 
  templateUrl: './translate-form.html',
  styleUrl: './translate-form.scss',
})


export class TranslateForm implements OnInit {

  readonly MAX_CHARS = 500;

  textArea = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.maxLength(this.MAX_CHARS)]
  });
  charactersTyped = 0;

  //Stop the typing when maximum characters has reach
  //Can apply some kind of warning for the approach of maximum characters (color change in the counter or a little parragraph)
  ngOnInit() {
    this.textArea.valueChanges.subscribe(value => {
      this.charactersTyped = value?.length ?? 0;
    });
  }
}
