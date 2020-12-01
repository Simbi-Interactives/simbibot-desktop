import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchFilter"
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any[], args?: any): any {
    if (!value) return null;
    if (!args) return value;
    
    args = args.toLowerCase();

    return value.filter(function(item) {
      if (item.name) return item.name.toLowerCase().includes(args);

      if (item.topic) return item.topic.toLowerCase().includes(args);

      // checks for student details
      if (item.email) return item.email.toLowerCase().includes(args)
      if (item.firstname) return item.firstname.toLowerCase().includes(args)
      if (item.lastname) return item.lastname.toLowerCase().includes(args)
    });
  }
}
