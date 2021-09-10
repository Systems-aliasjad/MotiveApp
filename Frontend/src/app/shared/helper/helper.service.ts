import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {}

  // public filterCard = (code: String, objKey: string): ICard[] => {
  //   return ApplicableCodes[objKey].filter((card) => {
  //     return card.applicableCodes.includes(code.toUpperCase());
  //   });
  // };
}
