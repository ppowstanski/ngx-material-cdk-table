import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";

export class NgxGridDataSource<T> extends DataSource<T> {
    private dataSourceSubject: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);

    constructor(data?: T[]) {
        super();

        if(data !== undefined){
            this.dataSourceSubject.next(data);
        }
    }

    connect(): Observable<readonly T[]> {
        return this.dataSourceSubject.asObservable();
    }

    disconnect(): void {
        this.dataSourceSubject.next([]);
    }
}