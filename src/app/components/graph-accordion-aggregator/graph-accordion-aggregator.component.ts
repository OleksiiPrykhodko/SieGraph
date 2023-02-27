import { Component, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import { GraphAccordionComponent } from '../graph-accordion/graph-accordion.component';
import { GraphPoint } from '../../models/graph/graph-point';
import { TagPoints } from '../../models/graph/tag-points';

@Component({
  selector: 'app-graph-accordion-aggregator',
  templateUrl: './graph-accordion-aggregator.component.html',
  styleUrls: ['./graph-accordion-aggregator.component.scss']
})
export class GraphAccordionAggregatorComponent {

@ViewChild('accordionsContainer', { read: ViewContainerRef }) private readonly accordionsContainer: ViewContainerRef;

  private _file: File;
  private _fileReader: FileReader;
  private _archiveRecords: string[];
  private _uniqueTagsPoints: TagPoints[];
  private _graphAccordionRefs: ComponentRef<GraphAccordionComponent>[] = [];

  public getFile(event: any){
    this._file = event.target.files[0];
    this._fileReader = new FileReader();
    if(this._file.name.endsWith(".csv")){
      this._fileReader.readAsText(this._file);
      this._fileReader.onload = () => {
        var fileData = this._fileReader.result;
        let fileRecordsArray = (<string>fileData).split(/\r\n|\n/);
        // Removing the table header from array.
        fileRecordsArray.shift();
        // Removing the service data from array.
        fileRecordsArray.pop();
        this._archiveRecords = fileRecordsArray;

        this._uniqueTagsPoints = this.GetUniqueTagsAndPoints(this._archiveRecords);
        this._uniqueTagsPoints.forEach(tagPoints => {
          this._graphAccordionRefs.push(this.GenerateGraphAccordion(tagPoints));
        });
      };
    }
    else{
      console.log("Do not try to send file with wrong type. CSV only!");
    }
  }

  private GetUniqueTagsAndPoints(archiveRecords: string[]): TagPoints[]{
    var tagValuesPaires: TagPoints[] = [];
    archiveRecords.forEach((record)=>{
      var recordValues = record.split(",");
      var graphPoint = new GraphPoint(recordValues[1].replace(/["]/g, ""),recordValues[2]);
      var oneOfTagPairs = tagValuesPaires.find((pair)=> pair.Name === recordValues[0].replace(/["\s$]/g, ""));
      if(oneOfTagPairs === undefined){
        tagValuesPaires.push(new TagPoints(recordValues[0].replace(/["\s$]/g, ""), [graphPoint]))
      }
      else{
        oneOfTagPairs?.Points.push(graphPoint);
      }
    });

    return tagValuesPaires;
  }

  private GenerateGraphAccordion(points: TagPoints): ComponentRef<GraphAccordionComponent>{
    var componentRef = this.accordionsContainer.createComponent(GraphAccordionComponent);
    var componentInstance = componentRef.instance;
    componentInstance.GraphPoints = points;
    componentRef.changeDetectorRef.detectChanges();
    return componentRef;
  }

}
