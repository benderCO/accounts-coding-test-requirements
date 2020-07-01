import { Pipe } from "@angular/core";

@Pipe({
  name: "phone"
})
export class PhonePipe {
  transform(rawNum) {
    return '(' + rawNum.substr(0,3) + ')-' + rawNum.substr(3,3) + '-' + rawNum.substr(6,4);
  }
}