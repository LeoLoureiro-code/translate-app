import { Component } from '@angular/core';
import { TranslateOptions } from "../translate-options/translate-options";
import { TextOptions } from "../text-options/text-options";

@Component({
  selector: 'result-form',
  imports: [TranslateOptions, TextOptions],
  templateUrl: './result-form.html',
  styleUrl: './result-form.scss',
})
export class ResultForm {

}
