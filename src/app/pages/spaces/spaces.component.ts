import { Component, OnInit, Input } from '@angular/core';
import { SpaceResourceService, SpaceDTO } from 'src/app/srvapi';
import { Router } from '@angular/router';


@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrls: ['./spaces.component.scss']
})
export class SpacesComponent implements OnInit {

  public subspaces: Array<SpaceDTO> = [];

  private _spaceId: number = -1;

  @Input()
  public set spaceId(spaceId: number) {
    this._spaceId = spaceId;
    this.loadData();
  }

  public get spaceId() {
    return this._spaceId;
  }

  constructor(private spaceResource: SpaceResourceService, private router: Router) { }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.spaceResource
      .getSpacesBelongingToSpaceUsingGET(this.spaceId)
      .subscribe(result => this.subspaces = result);
  }

  addNew() {
    let parentId = this.spaceId > -1 ? this.spaceId : undefined;
    let toAdd: SpaceDTO = { parentId: parentId, name: "", slug: "" };
    this.spaceResource
      .createSpaceUsingPOST(toAdd)
      .subscribe(createdSpace => this.showSpace(createdSpace));
  }

  showSpace(space: SpaceDTO) {
    this.router.navigate(['space', space.id]);
  }



}
