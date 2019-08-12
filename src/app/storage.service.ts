import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  public saveData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public getData(key: string) {
    const data = localStorage.getItem(key);
    return data === null ? null: JSON.parse(data); 
  }
}
